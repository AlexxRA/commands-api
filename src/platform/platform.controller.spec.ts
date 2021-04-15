import { Test, TestingModule } from '@nestjs/testing';
import { PlatformService } from './platform.service';
import { getModelToken } from '@nestjs/mongoose';

describe('PlatformController test', () => {
  let service: PlatformService;

  beforeEach(async () => {
    function mockCommandModel(dto: any) {
      this.data = dto;
      this.save  = () => {
        return this.data;
      };
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlatformService,
        {
          provide: getModelToken('Platform'),
          useValue: mockCommandModel,
        }
      ],
    }).compile();
    service = module.get<PlatformService>(PlatformService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
