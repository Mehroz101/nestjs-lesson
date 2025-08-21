import { Test, TestingModule } from '@nestjs/testing';
import { GetIpLogService } from './get-ip-log.service';

describe('GetIpLogService', () => {
  let service: GetIpLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetIpLogService],
    }).compile();

    service = module.get<GetIpLogService>(GetIpLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
