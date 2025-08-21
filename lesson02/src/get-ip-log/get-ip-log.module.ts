import { Module } from '@nestjs/common';
import { GetIpLogService } from './get-ip-log.service';

@Module({
  providers: [GetIpLogService],
  exports: [GetIpLogService],
})
export class GetIpLogModule { }
