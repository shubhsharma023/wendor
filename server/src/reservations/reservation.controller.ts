// src/reservations/reservation.controller.ts

import { Controller, Get, Param, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ReservationService } from './reservation.service';

@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Get('user/:userName')
  async getUserBookings(@Param('userName') userName: string) {
    return await this.reservationService.getUserBookings(userName);
  }

  @Post('cancel')
  async cancelBooking(@Body() body: { reservationId: number }) {
    try {
      const message = await this.reservationService.cancelBooking(body.reservationId);
      return { message };  // Return the confirmation message
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,  // 400 status code if the reservation wasn't found
      );
    }
  }
}
