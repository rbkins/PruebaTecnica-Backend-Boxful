import { IsNumber, IsString } from 'class-validator';

export class PaqueteDTO {
  @IsNumber()
  largo: number;

  @IsNumber()
  alto: number;

  @IsNumber()
  ancho: number;

  @IsNumber()
  pesoenlibras: number;

  @IsString()
  contenido: string;
  @IsString()
  envioId: string;
}
