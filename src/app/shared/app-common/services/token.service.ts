import {Injectable} from "@angular/core";

@Injectable()
export class TokenService {
  setToken(token: string, expiresIn: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('expiresIn', (new Date().getTime() + parseInt(expiresIn, 10) * 1000).toString());
  }

  getToken(): boolean {
    const expiresIn = localStorage.getItem('expiresIn');
    if (expiresIn) {
      const isExpired =
        new Date().getTime() > new Date(parseInt(<string> localStorage.getItem('expiresIn'), 10)).getTime();
      return !!localStorage.getItem('token') && !isExpired;
    }
    return !!localStorage.getItem('token');
  }

  clearToken(): void {
    localStorage.clear();
  }
}
