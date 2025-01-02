import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
    constructor( private readonly usersService:UsersService){}
    public findall(userId:string){

    const user=this.usersService.findOneById(userId);

        return[{
            user:user,
            title:'test file',
            content:'hii 1'
        },
    {
        user:user,
        title:'text file2',
        content:'hii 2'
    }]
        
    }

}
