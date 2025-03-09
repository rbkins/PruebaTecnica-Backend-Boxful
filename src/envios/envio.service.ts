import { Injectable, BadRequestException } from '@nestjs/common';
import { EnvioDTO } from './DTOS/envioDTO';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class EnvioService {
  constructor(private prisma: PrismaService) {}

  async create(createEnvioDto: EnvioDTO) {
    // Validar que createEnvioDto no sea undefined o null
    if (!createEnvioDto) {
      throw new BadRequestException('El DTO de envío no puede estar vacío.');
    }

    const { paquetes, ...envioData } = createEnvioDto;

    // Validar que paquetes sea un array y no esté vacío
    if (!Array.isArray(paquetes) || paquetes.length === 0) {
      throw new BadRequestException(
        'La lista de paquetes no es válida o está vacía.',
      );
    }

    // Validar que cada paquete tenga las propiedades requeridas, esto se ve en el formulario
    for (const paquete of paquetes) {
      if (
        typeof paquete.largo !== 'number' ||
        typeof paquete.alto !== 'number' ||
        typeof paquete.ancho !== 'number' ||
        typeof paquete.pesoenlibras !== 'number' ||
        typeof paquete.contenido !== 'string'
      ) {
        throw new BadRequestException(
          'Uno o más paquetes no tienen el formato correcto.',
        );
      }
    }

    // Validar que los datos de envío sean correctos
    if (
      !envioData.direccionrecoleccion ||
      !envioData.nombres ||
      !envioData.apellidos ||
      !envioData.correoelectronico ||
      !envioData.telefono ||
      !envioData.direcciondestinatario ||
      !envioData.fechaprogramada ||
      !envioData.departamento ||
      !envioData.municipio
    ) {
      throw new BadRequestException(
        'Faltan campos obligatorios en los datos del envío.',
      );
    }

    // Crear el envío en la base de datos
    try {
      const envio = await this.prisma.envio.create({
        data: {
          direccionrecoleccion: envioData.direccionrecoleccion,
          nombres: envioData.nombres,
          apellidos: envioData.apellidos,
          correoelectronico: envioData.correoelectronico,
          telefono: envioData.telefono,
          direcciondestinatario: envioData.direcciondestinatario,
          fechaprogramada: new Date(envioData.fechaprogramada),
          departamento: envioData.departamento,
          municipio: envioData.municipio,
          puntodereferencia: envioData.puntodereferencia,
          indicaciones: envioData.indicaciones,

          paquetes: {
            create: paquetes.map((paquete) => ({
              largo: paquete.largo,
              alto: paquete.alto,
              ancho: paquete.ancho,
              pesoenlibras: paquete.pesoenlibras,
              contenido: paquete.contenido,
            })),
          },
        },
      });

      return envio;
    } catch (error) {
      throw new BadRequestException(
        'Error al crear el envío: ' + error.message,
      );
    }
  }
}
