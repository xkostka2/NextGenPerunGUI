import {RichMember} from '../core/models/RichMember';
import {User} from '../core/models/User';
import {RichUser} from '../core/models/RichUser';
import {Attribute} from '../core/models/Attribute';


/**
 * Return string representing Material icon for status of given member.
 *
 * @param richMember member
 */
export function parseStatusIcon(richMember: RichMember): string {
  switch (richMember.status) {
    case 'VALID':
      return 'verified_user';
    case 'INVALID':
      return 'report';
    case 'SUSPENDED':
      return 'lock';
    case 'EXPIRED':
      return 'schedule';
    case 'DISABLED':
      return 'delete';
  }
}

/**
 * Return color which should be used for icon of given member's status.
 *
 * @param richMember member
 */
export function parseStatusColor(richMember: RichMember): string {
  switch (richMember.status) {
    case 'VALID':
      return 'accent';
    case 'INVALID':
      return 'warn';
    default:
      return '';
  }
}

/**
 * Gets email of given member. The vo-email has top priority, the preferred email
 * has lower priority. If there are no emails, an empty string is returned.
 *
 * @param richMember member
 */
export function parseEmail(richMember: RichMember): string {
  let email = '';
  richMember.memberAttributes.forEach(attr => {
    if (attr.friendlyName === 'mail' && attr.value !== null) {
      email = attr.value;
    }
  });

  if (email.length === 0) {
    richMember.userAttributes.forEach(attr => {
      if (attr.friendlyName === 'preferredMail') {
        email = attr.value;
      }
    });
  }

  return email;
}

/**
 * Get logins of given member.
 *
 * @param richMember member
 */
export function parseLogins(richMember: RichMember|RichUser): string {
  let logins = '';

  richMember.userAttributes.forEach(attr => {
    if (attr.baseFriendlyName === 'login-namespace') {
      logins += attr.friendlyNameParameter + ': ' + attr.value + ' ';
    }
  });

  if (logins.endsWith(' ')) {
    logins = logins.substring(0, logins.length - 1);
  }

  return logins;
}

export function parseUrnsToUrlParam(paramName: string, urns: string[]): string {
  let attributesParam = '';
  urns.forEach(a => attributesParam = attributesParam.concat(`&${paramName}%5B%5D=`).concat(a));
  return attributesParam;
}

/**
 * Creates full name for given user form his titles and names.
 *
 * @param user user
 */
export function parseFullName(user: User): string {
  let fullName = '';

  if (user.titleBefore !== null) {
    fullName += user.titleBefore + ' ';
  }
  if (user.firstName !== null) {
    fullName += user.firstName + ' ';
  }
  if (user.middleName !== null) {
    fullName += user.middleName + ' ';
  }
  if (user.lastName !== null) {
    fullName += user.lastName + ' ';
  }
  if (user.titleAfter !== null) {
    fullName += user.titleAfter + ' ';
  }
  if (fullName.endsWith(' ')) {
    fullName = fullName.substring(0, fullName.length - 1);
  }

  return fullName;
}

/**
 * Returns attribute with specific urn from given rich user.
 * If the given user doesn't have attribute with given urn, null is returned.
 *
 * @param user user with attributes
 * @param urn urn for required attribute
 */
export function getRichUserAttribute(user: RichUser, urn: string): Attribute {
  for (const attribute of user.userAttributes) {
    const attributeUrn = attribute.namespace + ':' + attribute.friendlyName;
    if (attributeUrn === urn) {
      return attribute;
    }
  }

  return null;
}

export async function doAfterDelay(delayMs: number, callback: () => void) {
  await delay(delayMs);
  callback();
}

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
