import {Injectable} from "@angular/core";

@Injectable()
export class TokenService {
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  clearToken(): void {
    localStorage.clear();
  }
}
