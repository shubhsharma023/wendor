// src/reservations/reservation.entity.ts

import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Slot } from '../slots/slot.entity';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Slot, (slot) => slot.reservation)
  slot: Slot;

  @Column()
  userName: string;

  @Column({ default: 'confirmed' })  // Default status is 'confirmed'
  status: string;  // 'confirmed' or 'cancelled'
}
