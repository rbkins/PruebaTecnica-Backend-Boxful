import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PaqueteModule } from './paquetes/paquetes.module';
import { EnvioModule } from './envios/DTOS/envio.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    EnvioModule,
    PaqueteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
