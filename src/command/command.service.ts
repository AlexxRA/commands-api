import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CommandDTO } from './dto/comand.dto';

@Injectable()
export class CommandService {
  constructor(
    @InjectModel('Command') private readonly commandModel: Model<CommandDTO>,
  ) {}

  async getCommands(): Promise<CommandDTO[]> {
    return this.commandModel.find();
  }

  async getCommand(commandId: string): Promise<CommandDTO> {
    const command = await this.commandModel.findById(commandId);
    if (!command) {
      throw new NotFoundException('Command not found');
    }
    return command;
  }

  async createCommand(createCommandDTO: CommandDTO): Promise<CommandDTO> {
    // if (!Types.ObjectId.isValid(createCommandDTO.category)) {
    //   throw new BadRequestException('Category ID was not found');
    // }
    const command = new this.commandModel(createCommandDTO);
    return command.save();
  }

  async deleteCommand(commandId: string): Promise<CommandDTO> {
    const deletedCommand = await this.commandModel.findByIdAndDelete(commandId);
    if (!deletedCommand) {
      throw new NotFoundException('Command not found');
    }
    return deletedCommand;
  }

  async updateCommand(
    commandId: string,
    createCommandDTO: CommandDTO,
  ): Promise<CommandDTO> {
    const updatedCommand = await this.commandModel.findByIdAndUpdate(
      commandId,
      createCommandDTO,
      {
        new: true,
        omitUndefined: true,
      },
    );
    if (!updatedCommand) {
      throw new NotFoundException('Command not found');
    }
    return updatedCommand;
  }
}
