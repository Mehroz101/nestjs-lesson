import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';
@Injectable()
export class BooksService {
  constructor(@Inject('BOOKS_SERVICE') private readonly booksServiceClient: ClientProxy) { }
  create(createBookDto: CreateBookDto) {
    return this.booksServiceClient.send('books.create', createBookDto);
  }


  findAll() {
    console.log("findAll");
    return this.booksServiceClient.send('books.findAll', {});
  }

  findOne(id: number) {
    console.log("id:", id);
    return this.booksServiceClient.send('books.findOne', id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.booksServiceClient.send('books.update', { id, ...updateBookDto });
  }

  remove(id: number) {
    return this.booksServiceClient.send('books.remove', { id });
  }
}
