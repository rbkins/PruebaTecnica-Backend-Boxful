import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { EnvioController } from '../envios.controller';
import { EnvioService } from '../envio.service';

@Module({
  controllers: [EnvioController],
  providers: [EnvioService, PrismaService],
  exports: [EnvioService],
})
export class EnvioModule {}
