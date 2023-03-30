import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {TokenService} from "../app-common/services/token.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private tokenService: TokenService) {
  }

  canActivate() {
    const key = this.tokenService.getToken();
    console.log(key);
    if (!key) {
      return this.router.navigate(['/auth/login']);
    }
    return key;
  }
}
