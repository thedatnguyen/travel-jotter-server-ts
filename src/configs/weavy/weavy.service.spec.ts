import { Test, TestingModule } from '@nestjs/testing';
import { WeavyService } from './weavy.service';

describe('WeavyService', () => {
  let service: WeavyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeavyService],
    }).compile();

    service = module.get<WeavyService>(WeavyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
