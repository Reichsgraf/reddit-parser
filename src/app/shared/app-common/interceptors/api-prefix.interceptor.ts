import {Injectable} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  private readonly prefix: string;

  constructor() {
    this.prefix = environment.apiUrl;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!/^(http|https):/i.test(request.url) && !request.url.includes('i18n')) {
      request = request.clone({ url: this.prefix + request.url });
    }
    return next.handle(request);
  }
}

export const apiPrefixInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiPrefixInterceptor,
  multi: true
}
