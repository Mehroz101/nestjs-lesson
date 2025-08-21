import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    GetHello(): import("rxjs").Observable<any>;
    create(createBookDto: CreateBookDto): import("rxjs").Observable<any>;
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    update(id: string, updateBookDto: UpdateBookDto): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
