import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
constructor(private readonly postService:PostsService){
}

@Get('/:userId?')
public getPosts(@Param('userId') userId:string){
    return this.postService.findall(userId);
}
}
