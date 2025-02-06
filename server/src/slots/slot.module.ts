// src/slots/slot.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slot } from './slot.entity';
import { SlotService } from './slot.service';
import { SlotController } from './slot.controller';
import { Reservation } from '../reservations/reservation.entity';
import { ReservationService } from '../reservations/reservation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Slot, Reservation])],
  providers: [SlotService, ReservationService],
  controllers: [SlotController],
})
export class SlotModule {}
