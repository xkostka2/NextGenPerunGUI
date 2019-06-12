import {Injectable} from '@angular/core';
import {RichMember} from '../../models/RichMember';
import {User} from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() {
  }

  /**
   * Return string representing Material icon for status of given member.
   *
   * @param richMember member
   */
  parseStatusIcon(richMember: RichMember): string {
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
  parseStatusColor(richMember: RichMember): string {
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
  parseEmail(richMember: RichMember): string {
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
  parseLogins(richMember: RichMember): string {
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

  /**
   * Creates full name for given user form his titles and names.
   *
   * @param user user
   */
  parseFullName(user: User): string {
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

  async doAfterDelay(delayMs: number, callback: () => void) {
    await this.delay(delayMs);
    callback();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
