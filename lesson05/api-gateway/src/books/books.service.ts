import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BooksService {
  constructor(@Inject("BOOKS_SERVICE") private readonly booksClient: ClientProxy) { }

  getHello() {
    return this.booksClient.send("book.hello", {});
  }
  create(createBookDto: CreateBookDto) {
    return this.booksClient.send("create_book", createBookDto);
  }

  findAll() {
    return this.booksClient.send("find_all_books", {});
  }

  findOne(id: number) {
    return this.booksClient.send("find_one_book", { id });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.booksClient.send("update_book", { id, ...updateBookDto });
  }

  remove(id: number) {
    return this.booksClient.send("remove_book", { id });
  }
}
