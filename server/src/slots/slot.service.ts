// src/slots/slot.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Slot } from './slot.entity';
import { Carpenter } from '../carpenters/carpenter.entity';
import { Reservation } from '../reservations/reservation.entity';
import { IsNull } from 'typeorm';

@Injectable()
export class SlotService {
  constructor(
    @InjectRepository(Slot)
    private slotRepository: Repository<Slot>,
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  async getAvailableSlots(carpenterId: number): Promise<Slot[]> {
    return await this.slotRepository.find({
      where: {
        carpenter: { id: carpenterId },
        reservation: IsNull(), // Use IsNull() to check for null
      },
    });
  }

  // Book a slot with carpenter's information linked to the reservation
  async bookSlot(slotId: number, userName: string): Promise<Reservation> {
    // Fetch the slot and its associated carpenter
    const slot = await this.slotRepository.findOne({
      where: { id: slotId },
      relations: ['carpenter'],  // Ensure carpenter is fetched along with the slot
    });

    if (!slot) throw new Error('Slot not found');
    
    if (slot.reservation) throw new Error('Slot already booked');
    
    // Create a new reservation and associate the carpenter with the reservation
    const reservation = new Reservation();
    reservation.slot = slot;
    reservation.userName = userName;
    reservation.status = 'confirmed';
    
    await this.reservationRepository.save(reservation);
    return reservation;
  }

  async cancelBooking(reservationId: number): Promise<void> {
    const reservation = await this.reservationRepository.findOne({ where: { id: reservationId } });
    if (!reservation) throw new Error('Reservation not found');
    
    reservation.status = 'cancelled';
    await this.reservationRepository.save(reservation);
  }
}
