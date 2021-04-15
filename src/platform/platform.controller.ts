import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { PlatformDTO } from './dto/platform.dto';
import { PlatformService } from './platform.service';

@Controller('platform')
export class PlatformController {
  constructor(private platformService: PlatformService) {}

  // CREATE
  @Post('/')
  async createPlatform(
    @Body() createPlatformDTO: PlatformDTO
  ): Promise<PlatformDTO> {
    return this.platformService.createPlatform(createPlatformDTO);
  }

  // READ
  @Get('/')
  getPlatforms(): Promise<PlatformDTO[]> {
    return this.platformService.getPlatforms();
  }

  // READ SPECIFIC
  @Get('/:platformId')
  getProduct(
    @Param('platformId') platformId
  ): Promise<PlatformDTO> {
    return this.platformService.getPlatform(platformId);
  }

  // UPDATE
  @Put('/:platformId')
  updatePlatform(
    @Body() createPlatformDTO: PlatformDTO,
    @Param('platformId') platformId,
  ): Promise<PlatformDTO> {
    return this.platformService.updatePlatform(platformId, createPlatformDTO);
  }

  // DELETE
  @Delete('/:productId')
  deletePlatform(
    @Param('productId') productId
  ): Promise<PlatformDTO> {
    return this.platformService.deletePlatform(productId);
  }
}
