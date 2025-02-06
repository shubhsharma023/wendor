// src/carpenters/carpenter.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carpenter } from './carpenter.entity';

@Injectable()
export class CarpenterService {
  constructor(
    @InjectRepository(Carpenter)
    private carpenterRepository: Repository<Carpenter>,
  ) {}

  async getAllCarpenters(): Promise<Carpenter[]> {
    return await this.carpenterRepository.find({ relations: ['slots'] });
  }
}
