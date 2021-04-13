import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CommandDTO } from './dto/comand.dto';
import { CommandService } from './command.service';

@Controller('command')
export class CommandController {
  constructor(private commandService: CommandService) {}

  // CREATE
  @Post('/')
  async createCommand(
    @Body() createCommandDTO: CommandDTO
  ): Promise<CommandDTO> {
    return this.commandService.createCommand(createCommandDTO);
  }

  // READ
  @Get('/')
  getCommands(): Promise<CommandDTO[]> {
    return this.commandService.getCommands();
  }

  // READ SPECIFIC
  @Get('/:commandId')
  getProduct(
    @Param('commandId') commandId
  ): Promise<CommandDTO> {
    return this.commandService.getCommand(commandId);
  }

  // UPDATE
  @Put('/:commandId')
  updateCommand(
    @Body() createCommandDTO: CommandDTO,
    @Param('commandId') commandId,
  ): Promise<CommandDTO> {
    return this.commandService.updateCommand(commandId, createCommandDTO);
  }

  // DELETE
  @Delete('/:productId')
  deleteCommand(
    @Param('productId') productId
  ): Promise<CommandDTO> {
    return this.commandService.deleteCommand(productId);
  }
}
