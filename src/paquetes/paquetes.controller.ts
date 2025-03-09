import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PaqueteService } from './paquete.service';
import { PaqueteDTO } from 'src/envios/DTOS/paqueteDTO';

@Controller('paquetes')
export class PaqueteController {
  constructor(private readonly paqueteService: PaqueteService) {}

  @Post()
  async create(@Body() createPaqueteDto: PaqueteDTO) {
    return this.paqueteService.create(createPaqueteDto);
  }

  @Get()
  async findAll() {
    return this.paqueteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.paqueteService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePaqueteDto: PaqueteDTO) {
    return this.paqueteService.update(id, updatePaqueteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.paqueteService.remove(id);
  }
}
