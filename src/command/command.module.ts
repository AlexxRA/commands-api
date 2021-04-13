import { Module } from '@nestjs/common';
import { CommandController } from './command.controller';
import { CommandService } from './command.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Command, CommandSchema } from './schemas/command.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Command.name, schema: CommandSchema }]),
  ],
  controllers: [CommandController],
  providers: [CommandService],
  exports: [CommandService]
})
export class CommandModule {}
