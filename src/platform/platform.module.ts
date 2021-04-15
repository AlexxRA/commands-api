import { Module } from '@nestjs/common';
import { PlatformController } from './platform.controller';
import { PlatformService } from './platform.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Platform, PlatformSchema } from './schemas/platform.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Platform.name, schema: PlatformSchema }]),
  ],
  controllers: [PlatformController],
  providers: [PlatformService],
  exports: [PlatformService]
})
export class PlatformModule {}
