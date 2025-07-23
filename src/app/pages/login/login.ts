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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
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
    login: 'lucas@123',
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
      nome: ['', Validators.required],
      email: [''],
      senha: ['', Validators.required],
      lgpd: [false],
    });

    this.setValidações();
  }

  setValidações() {
    if (this.isCadastro) {
      this.formLogin
        .get('email')
        ?.setValidators([Validators.required, Validators.email]);
      this.formLogin.get('lgpd')?.setValidators(Validators.requiredTrue);
    } else {
      this.formLogin.get('email')?.clearValidators();
      this.formLogin.get('lgpd')?.clearValidators();
    }

    this.formLogin.get('email')?.updateValueAndValidity();
    this.formLogin.get('lgpd')?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.formLogin.invalid) {
      this.errorMessage = 'Por favor, preencha todos os campos corretamente.';
      return;
    }

    const { nome, senha } = this.formLogin.value;

    if (nome === this.usuario.login && senha === this.usuario.senha) {
      this.authService.login({
        id: this.usuario.id,
        nome: this.usuario.nome,
        email: this.usuario.email,
      });
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'Usuário ou senha inválidos.';
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
    this.setValidações();
  }

  goToLogin() {
    this.isCadastro = false;
    this.setValidações();
  }
}
