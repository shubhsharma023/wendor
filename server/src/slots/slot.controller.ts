// src/slots/slot.controller.ts

import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { SlotService } from './slot.service';
import { ReservationService } from '../reservations/reservation.service';

@Controller('slots')
export class SlotController {
  constructor(
    private readonly slotService: SlotService,
    private readonly reservationService: ReservationService,
  ) {}

  @Get('available/:carpenterId')
  async getAvailableSlots(@Param('carpenterId') carpenterId: number) {
    return await this.slotService.getAvailableSlots(carpenterId);
  }

  @Post('book')  // Ensure this decorator is present
  async bookSlot(@Body() body: { slotId: number; userName: string }) {
    return await this.slotService.bookSlot(body.slotId, body.userName);
  }
}