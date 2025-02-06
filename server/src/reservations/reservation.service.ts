// src/reservations/reservation.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './reservation.entity';
import { Slot } from '../slots/slot.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  async getUserBookings(userName: string): Promise<Reservation[]> {
    return this.reservationRepository.find({
      where: { userName },
      relations: ['slot', 'slot.carpenter'],  // Ensure carpenter is fetched along with the slot
    });
  }

  async cancelBooking(reservationId: number): Promise<string> {
    const reservation = await this.reservationRepository.findOne({ where: { id: reservationId } });

    if (!reservation) {
      throw new Error('Reservation not found');
    }

    reservation.status = 'cancelled';
    await this.reservationRepository.save(reservation);

    return `Reservation with ID ${reservationId} has been successfully cancelled.`;
  }

  async createReservation(userName: string, slot: Slot): Promise<Reservation> {
    // Check if the carpenter is associated with the slot
    if (!slot.carpenter) {
      throw new Error('Carpenter not found for this slot');
    }

    // Create the reservation
    const reservation = this.reservationRepository.create({
      userName,
      slot,
      status: 'confirmed',
    });

    // Save the reservation
    await this.reservationRepository.save(reservation);

    return reservation;
  }
}
