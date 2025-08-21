import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICES } from './shared/constants';


@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.USERS,
        transport: Transport.TCP,
        options: { port: 3001 },
      },
      {
        name: SERVICES.PRODUCTS,
        transport: Transport.TCP,
        options: { port: 3002 },
      },
    ]),
  ],
  controllers: [GatewayController],
  providers: [],
})
export class AppModule { }
