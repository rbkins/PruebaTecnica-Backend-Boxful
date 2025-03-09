import { Injectable } from '@nestjs/common';
import { PaqueteDTO } from 'src/envios/DTOS/paqueteDTO';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PaqueteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPaqueteDto: PaqueteDTO) {
    return this.prisma.paquete.create({
      data: {
        ...createPaqueteDto,
        envioId: createPaqueteDto.envioId,
      },
    });
  }

  async findAll() {
    return this.prisma.paquete.findMany();
  }

  async findOne(id: string) {
    return this.prisma.paquete.findUnique({
      where: { id },
    });
  }

  async update(id: string, updatePaqueteDto: PaqueteDTO) {
    return this.prisma.paquete.update({
      where: { id },
      data: updatePaqueteDto,
    });
  }

  async remove(id: string) {
    return this.prisma.paquete.delete({
      where: { id },
    });
  }
}
