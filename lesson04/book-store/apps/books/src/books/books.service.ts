import { Injectable, NotFoundException, RequestMapping } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
  private books: BookDto[] = [{
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
    rating: 4.5,
  }, {
    id: 2,
    title: 'Book 2',
    author: 'Author 2',
    rating: 3.8,
  }, {
    id: 3,
    title: 'Book 3',
    author: 'Author 3',
    rating: 4.2,

  }];
  create(createBookDto: CreateBookDto) {
    const newBook: BookDto = {
      ...createBookDto,
      id: this.books.length + 1,
    }
    this.books.push(newBook);
    return newBook;

  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    const book = this.books.find(book => book.id === id);
    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return book;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.books.map(book => {
      if (book.id === id) {
        return { ...book, ...updateBookDto };
      }
      return book;
    });
  }

  remove(id: number) {
    return this.books = this.books.filter(book => book.id !== id);
  }
}
