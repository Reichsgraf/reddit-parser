import {Injectable} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {TokenService} from "../services/token.service";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  redditApiUrl = environment.redditApiUrl;

  constructor(public tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.endsWith('/logout')) {
      return next.handle(request);
    }

    if (request.url.includes(this.redditApiUrl)) {
      return next.handle(request);
    }

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.tokenService.getToken()}`
      }
    });
    return next.handle(request);
  }

}

export const tokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}
