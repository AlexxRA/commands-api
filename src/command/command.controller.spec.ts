import { Test, TestingModule } from '@nestjs/testing';
import { CommandService } from './command.service';
import { getModelToken } from '@nestjs/mongoose';

describe('CommandController test', () => {
  let service: CommandService;

  beforeEach(async () => {
    function mockCommandModel(dto: any) {
      this.data = dto;
      this.save  = () => {
        return this.data;
      };
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandService,
        {
          provide: getModelToken('Command'),
          useValue: mockCommandModel,
        }
      ],
    }).compile();
    service = module.get<CommandService>(CommandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
