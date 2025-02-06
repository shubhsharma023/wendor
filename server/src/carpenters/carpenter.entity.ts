// src/carpenters/carpenter.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Slot } from '../slots/slot.entity';

@Entity()
export class Carpenter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Slot, (slot) => slot.carpenter)
  slots: Slot[];
}
