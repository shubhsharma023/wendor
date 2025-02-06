// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarpenterModule } from './carpenters/carpenter.module';
import { SlotModule } from './slots/slot.module';
import { ReservationModule } from './reservations/reservation.module';
import { databaseConfig } from './database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    CarpenterModule,
    SlotModule,
    ReservationModule,
  ],
})
export class AppModule {}
