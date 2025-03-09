import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { EnvioService } from './envio.service';

import { EnvioDTO } from './DTOS/envioDTO';

@Controller('envios')
export class EnvioController {
  constructor(private readonly envioService: EnvioService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createEnvioDto: EnvioDTO) {
    return this.envioService.create(createEnvioDto);
  }
}
