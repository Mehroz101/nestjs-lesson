import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    GetHello(): import("rxjs").Observable<any>;
    create(createUserDto: CreateUserDto): import("rxjs").Observable<any>;
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    update(id: string, updateUserDto: UpdateUserDto): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
