import { Module } from '@nestjs/common';
import { PaqueteService } from './paquete.service';

import { PaqueteController } from './paquetes.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [PaqueteController],
  providers: [PaqueteService, PrismaService],
})
export class PaqueteModule {}
