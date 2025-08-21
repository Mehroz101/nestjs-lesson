import { GetIpLogMiddleware } from './get-ip-log.middleware';
import { GetIpLogService } from './get-ip-log.service';

describe('GetIpLogMiddleware', () => {
  it('should be defined', () => {
    expect(new GetIpLogMiddleware(new GetIpLogService())).toBeDefined();
  });
});
