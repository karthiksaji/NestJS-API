import { Injectable } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class PostsService {
    public findall(userId:string){
        return[{
            title:'test file',
            content:'hii 1'
        },
    {
        title:'text file2',
        content:'hii 2'
    }]
        
    }

}
