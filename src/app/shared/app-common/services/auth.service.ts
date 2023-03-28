import {Injectable} from "@angular/core";
import {map, Subject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import {Router} from "@angular/router";

export interface User {
  email: string;
  token: string;
}

@Injectable()
export class AuthService {
  user$ = new Subject<User>();

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private router: Router) {
  }

  createUser(email: string, username: string, password: string) {
    const body = { email, username, password };
    return this.http.post<User>('/auth/sign-up', body)
      .pipe(
        map(res => res?.token),
        tap((token: string) => {
          this.tokenService.setToken(token);
          this.user$.next({email, token});
        })
      );
  }

  loginUser(email: string, password: string) {
    const body = { email, password };
    return this.http.post<User>('/auth/sign-in', body)
      .pipe(
        map(res => res?.token),
        tap((token: string) => {
          this.tokenService.setToken(token);
          this.user$.next({ email, token });
        })
      );
  }

  logoutUser() {
    this.tokenService.clearToken();
    return this.router.navigateByUrl('/auth');
  }
}
