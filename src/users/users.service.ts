import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(email: string, password: string) {
    return await this.prisma.user.create({
      data: { email, password },
    });
  }

  async getAllUsers() {
    return await this.prisma.user.findMany();
  }

  async findByEmail(email: string): Promise<User | null> {
    if (!email) {
      throw new Error('Email no proporcionado');
    }
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }
}
