import {Injectable} from '@angular/core';
import {PerunPrincipal, Role} from '../../models/PerunPrincipal';

@Injectable({
  providedIn: 'root'
})
export class AuthResolverService {

  constructor() { }

  private principal: PerunPrincipal;

  private principalRoles: Set<Role> = new Set<Role>();

  private facilities: number[] = [];
  private vos: number[] = [];
  private members: number[] = [];
  private user: number;

  setPerunPrincipal(principal: PerunPrincipal): void {
    this.principal = principal;
    this.initData(principal);
  }

  getPerunPrincipal(): PerunPrincipal {
    return this.principal;
  }


  public canManageFacilities(): boolean {
    return this.hasAtLeasOne(Role.PERUNADMIN, Role.FACILITYADMIN);
  }

  public isPerunAdmin(): boolean {
    return this.principalRoles.has(Role.PERUNADMIN);
  }

  /**
   * Initialises principal data which are used for later verification
   *
   * @param principal given principal
   */
  private initData(principal: PerunPrincipal) {
    for (const p in principal.roles) {
      if (principal.roles.hasOwnProperty(p)) {
        this.principalRoles.add(<Role><unknown>p);
      }
    }
    console.log(this.principalRoles);
  }

  /**
   * Returns true if the principal has at least one of the given roles.
   * Otherwise, returns false
   *
   * @param roles specified roles
   */
  private hasAtLeasOne(...roles: Role[]): boolean {
    for (const role of roles) {
      if (this.principalRoles.has(role)) {
        return true;
      }
    }
    return false;
  }
}
