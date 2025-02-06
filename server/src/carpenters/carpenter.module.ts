// src/carpenters/carpenter.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carpenter } from './carpenter.entity';
import { CarpenterService } from './carpenter.service';
import { CarpenterController } from './carpenter.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Carpenter])],
  providers: [CarpenterService],
  controllers: [CarpenterController],
})
export class CarpenterModule {}
