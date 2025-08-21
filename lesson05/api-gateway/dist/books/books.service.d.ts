import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class BooksService {
    private readonly booksClient;
    constructor(booksClient: ClientProxy);
    getHello(): import("rxjs").Observable<any>;
    create(createBookDto: CreateBookDto): import("rxjs").Observable<any>;
    findAll(): import("rxjs").Observable<any>;
    findOne(id: number): import("rxjs").Observable<any>;
    update(id: number, updateBookDto: UpdateBookDto): import("rxjs").Observable<any>;
    remove(id: number): import("rxjs").Observable<any>;
}
