import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
    constructor( private readonly usersService:UsersService){}
    public findall(userId:string){
   

           
    }

}
