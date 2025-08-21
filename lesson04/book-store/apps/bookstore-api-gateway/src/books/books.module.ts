import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([{
      name: 'BOOKS_SERVICE',
      transport: Transport.TCP,
      options: {
        port: 3002, // Adjust the port as needed
      },
    }]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule { }
