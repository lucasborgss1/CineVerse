import { Injectable } from '@angular/core';

export interface AuthUser {
  id: number;
  nome: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(user: AuthUser): void {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getUser(): AuthUser | null {
    const user = localStorage.getItem('user');
    return user ? (JSON.parse(user) as AuthUser) : null;
  }
}
