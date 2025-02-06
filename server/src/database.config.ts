// src/database.config.ts

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost', // or your database host
  port: 5432,
  username: 'postgres',
  password: '2335',
  database: 'urban_company_booking',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,  // For development, set to true. Use migrations in production.
  logging: true,
};
