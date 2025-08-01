import { Injectable } from '@angular/core';

export interface AuthUser {
  nome: string;
  email: string;
  senha?: string; // só usada internamente, não persiste no login
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(user: AuthUser): void {
    const { senha, ...userWithoutPassword } = user;
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
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

  getUsers(): AuthUser[] {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }

  saveUsers(users: AuthUser[]): void {
    localStorage.setItem('users', JSON.stringify(users));
  }

  cadastrar(novoUsuario: AuthUser): { success: boolean; message?: string } {
    const users = this.getUsers();
    const emailJaExiste = users.some((u) => u.email === novoUsuario.email);

    if (emailJaExiste) {
      return { success: false, message: 'Este e-mail já está cadastrado.' };
    }

    const novo = {
      ...novoUsuario,
      id: Date.now(),
    };

    users.push(novo);
    this.saveUsers(users);

    return { success: true };
  }

  validarLogin(email: string, senha: string): AuthUser | null {
    const users = this.getUsers();
    const user = users.find((u) => u.email === email && u.senha === senha);
    return user ?? null;
  }
}
