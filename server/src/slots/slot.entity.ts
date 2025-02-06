// src/slots/slot.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Carpenter } from '../carpenters/carpenter.entity';
import { Reservation } from '../reservations/reservation.entity';

@Entity()
export class Slot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  time: string; // Format: "HH:mm"

  @ManyToOne(() => Carpenter, (carpenter) => carpenter.slots)
  @JoinColumn({ name: 'carpenter_id' })  // Explicitly specify the name of the foreign key column
  carpenter: Carpenter;

  @ManyToOne(() => Reservation, (reservation) => reservation.slot, { nullable: true })
  @JoinColumn({ name: 'reservation_id' }) // Optionally specify this if you want a custom name for the reservation foreign key
  reservation: Reservation;
}
