import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Footer } from '../../components/footer/footer';
import { Background } from '../../components/background/background';
import { HeaderExperiencia } from '../../components/header-experiencia/header-experiencia';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    Footer,
    Background,
    HeaderExperiencia,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  formLogin!: FormGroup;
  passwordVisible = false;
  errorMessage = '';
  isCadastro: boolean = false;

  usuario = {
    id: 1,
    nome: 'Lucas de Almeida Borges',
    senha: '123456',
    email: 'lucas123@gmail.com',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      nome: [''],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      lgpd: [false],
    });

    this.setValidações();
  }

  setValidações() {
    if (this.isCadastro) {
      this.formLogin.get('nome')?.setValidators([Validators.required]);
      this.formLogin
        .get('email')
        ?.setValidators([Validators.required, Validators.email]);
      this.formLogin
        .get('senha')
        ?.setValidators([Validators.required, Validators.minLength(6)]);
      this.formLogin.get('lgpd')?.setValidators(Validators.requiredTrue);
    } else {
      this.formLogin.get('nome')?.clearValidators();
      this.formLogin.get('email')?.setValidators([Validators.required]);
      this.formLogin.get('senha')?.setValidators([Validators.required]);
      this.formLogin.get('lgpd')?.clearValidators();
    }

    ['nome', 'email', 'senha', 'lgpd'].forEach((campo) => {
      this.formLogin.get(campo)?.updateValueAndValidity();
    });
  }

  onSubmit() {
    this.formLogin.markAllAsTouched();

    if (this.formLogin.invalid) {
      this.errorMessage = 'Por favor, preencha todos os campos corretamente.';
      return;
    }

    const { nome, email, senha } = this.formLogin.value;

    if (this.isCadastro) {
      const result = this.authService.cadastrar({ nome, email, senha });

      if (!result.success) {
        this.errorMessage = result.message!;
        return;
      }

      const usuarioCriado = this.authService.validarLogin(email, senha);
      if (usuarioCriado) {
        this.authService.login(usuarioCriado);
        this.router.navigate(['/cineverse']);
      }
    } else {
      const user = this.authService.validarLogin(email, senha);

      if (user) {
        this.authService.login(user);
        this.router.navigate(['/cineverse']);
      } else {
        this.errorMessage = 'Usuário ou senha inválidos.';
      }
    }
  }

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
    const input = document.getElementById('InputPassword') as HTMLInputElement;
    const icon = document.querySelector('.toggle-password') as HTMLElement;

    if (this.passwordVisible) {
      input.type = 'text';
      icon.classList.remove('bi-eye-slash');
      icon.classList.add('bi-eye');
    } else {
      input.type = 'password';
      icon.classList.remove('bi-eye');
      icon.classList.add('bi-eye-slash');
    }
  }

  goToCadastro() {
    this.isCadastro = true;
    this.errorMessage = '';
    this.setValidações();
  }

  goToLogin() {
    this.isCadastro = false;
    this.errorMessage = '';
    this.setValidações();
  }

  getCampoErro(campo: string): string {
    const control = this.formLogin.get(campo);

    if (!control || !control.touched || control.valid) return '';

    if (control.errors?.['required']) {
      return 'Este campo é obrigatório.';
    }

    if (campo === 'email' && control.errors?.['email']) {
      return 'Insira um e-mail válido.';
    }

    if (campo === 'senha' && control.errors?.['minlength']) {
      return `A senha deve ter no mínimo ${control.errors['minlength'].requiredLength} caracteres.`;
    }

    if (campo === 'lgpd' && control.errors?.['required']) {
      return 'Você precisa aceitar os termos.';
    }

    return '';
  }
}
