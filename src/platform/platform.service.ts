import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PlatformDTO } from './dto/platform.dto';

@Injectable()
export class PlatformService {
  constructor(
    @InjectModel('Platform') private readonly platformModel: Model<PlatformDTO>,
  ) {}

  async getPlatforms(): Promise<PlatformDTO[]> {
    return this.platformModel.find();
  }

  async getPlatform(PlatformId: string): Promise<PlatformDTO> {
    const Platform = await this.platformModel.findById(PlatformId);
    if (!Platform) {
      throw new NotFoundException('Platform not found');
    }
    return Platform;
  }

  async createPlatform(createPlatformDTO: PlatformDTO): Promise<PlatformDTO> {
    // if (!Types.ObjectId.isValid(createPlatformDTO.category)) {
    //   throw new BadRequestException('Category ID was not found');
    // }
    const Platform = new this.platformModel(createPlatformDTO);
    return Platform.save();
  }

  async deletePlatform(PlatformId: string): Promise<PlatformDTO> {
    const deletedPlatform = await this.platformModel.findByIdAndDelete(PlatformId);
    if (!deletedPlatform) {
      throw new NotFoundException('Platform not found');
    }
    return deletedPlatform;
  }

  async updatePlatform(
    PlatformId: string,
    createPlatformDTO: PlatformDTO,
  ): Promise<PlatformDTO> {
    const updatedPlatform = await this.platformModel.findByIdAndUpdate(
      PlatformId,
      createPlatformDTO,
      {
        new: true,
        omitUndefined: true,
      },
    );
    if (!updatedPlatform) {
      throw new NotFoundException('Platform not found');
    }
    return updatedPlatform;
  }
}
