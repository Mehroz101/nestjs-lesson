import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class UsersService {
    private readonly usersClient;
    constructor(usersClient: ClientProxy);
    getHello(): import("rxjs").Observable<any>;
    create(createUserDto: CreateUserDto): import("rxjs").Observable<any>;
    findAll(): import("rxjs").Observable<any>;
    findOne(id: number): import("rxjs").Observable<any>;
    update(id: number, updateUserDto: UpdateUserDto): import("rxjs").Observable<any>;
    remove(id: number): import("rxjs").Observable<any>;
}
