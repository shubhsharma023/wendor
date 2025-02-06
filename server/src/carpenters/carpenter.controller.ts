// src/carpenters/carpenter.controller.ts

import { Controller, Get } from '@nestjs/common';
import { CarpenterService } from './carpenter.service';

@Controller('carpenters')
export class CarpenterController {
  constructor(private readonly carpenterService: CarpenterService) {}

  @Get()
  async getAllCarpenters() {
    return await this.carpenterService.getAllCarpenters();
  }
}
