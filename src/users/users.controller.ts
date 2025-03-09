// src/users/users.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService, // Injectamos AuthService para manejar JWT
  ) {}

  // Endpoint para el registro de usuarios
  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    return this.usersService.createUser(body.email, body.password);
  }

  // Endpoint para el login de usuarios
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    if (!email || !password) {
      throw new Error('Email y contraseña son requeridos');
    }

    console.log('Email recibido:', email);

    const user = await this.authService.validateUser(email, password);

    if (!user) {
      console.log('Usuario no encontrado o credenciales incorrectas');
      throw new Error('Credenciales incorrectas');
    }

    console.log('Usuario validado:', user);

    return this.authService.login({ email: user.email, id: user.id });
  }
}
