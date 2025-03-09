# Backend - NestJS

Este es el backend del proyecto, desarrollado con [NestJS](https://nestjs.com/) y utilizando MongoDB Atlas y prisma para conexion.

## Requisitos previos

Asegúrate de tener instalados los siguientes requisitos antes de continuar:
- [Node.js](https://nodejs.org/) (versión recomendada: 18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instalación

Clona este repositorio y accede a la carpeta del backend:

```sh
https://github.com/rbkins/PruebaTecnica-Backend-Boxful.git
```

Instala las dependencias necesarias con npm o yarn, tambien instala nest y class-validator para que funcione.:

```sh
npm install
# o
yarn install

npm install @nestjs/config

npm install class-validator class-transformer

```

## Configuración

El backend ya está configurado para conectarse a MongoDB Atlas. No es necesario modificar la configuración de la base de datos en el archivo `.env`.

## Ejecución del servidor

Para ejecutar el servidor en modo desarrollo (Recomendable):

```sh
npm run start:dev
```

Para ejecutar en producción:

```sh
npm run start:prod
```

## Scripts disponibles

- `npm run build`: Compila el código TypeScript en JavaScript.
- `npm run start`: Inicia el servidor en modo producción.
- `npm run start:dev`: Inicia el servidor en modo desarrollo con recarga automática.
- `npm run start:debug`: Inicia el servidor en modo debug.
- `npm run lint`: Ejecuta ESLint para revisar el código.
- `npm run test`: Ejecuta los tests unitarios.

## API Endpoints

Para probar los endpoints, puedes usar [Postman](https://www.postman.com/)

## Tecnologías utilizadas

- **NestJS**: Framework de Node.js para aplicaciones escalables.
- **MongoDB Atlas**: Base de datos en la nube.
- **Prisma**: ORM para manejar la base de datos.
- **JWT y Passport**: Para autenticación y autorización.




Una vez corras el proyecto con el comando 
npm run start:dev
puede probar la parte del  frontend ******SUPER IMPORTANTE*******
