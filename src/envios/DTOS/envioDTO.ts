// src/envios/DTOS/envioDTO.ts

import {
  IsString,
  IsOptional,
  IsEmail,
  IsPhoneNumber,
  IsArray,
  IsDateString,
} from 'class-validator';
import { ValidateNested } from 'class-validator'; // Importa ValidateNested desde class-validator
import { Type } from 'class-transformer'; // Importa Type desde class-transformer

import { PaqueteDTO } from './paqueteDTO';

export class EnvioDTO {
  @IsString()
  direccionrecoleccion: string;

  @IsString()
  nombres: string;

  @IsString()
  apellidos: string;

  @IsEmail()
  correoelectronico: string;

  @IsPhoneNumber()
  telefono: string;

  @IsString()
  direcciondestinatario: string;

  @IsDateString()
  fechaprogramada: string;

  @IsString()
  departamento: string;

  @IsString()
  municipio: string;

  @IsOptional()
  @IsString()
  puntodereferencia?: string;

  @IsOptional()
  @IsString()
  indicaciones?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PaqueteDTO)
  paquetes: PaqueteDTO[];
}
