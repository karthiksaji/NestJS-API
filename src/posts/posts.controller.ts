import { Body, Controller, Get, Param,Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';
import { create } from 'domain';
import { CreatePostDto } from './dtos/create-post.dto';
import { log } from 'console';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
constructor(private readonly postService:PostsService){
}

@Get('/:userId?')
public getPosts(@Param('userId') userId:string){
    return this.postService.findall(userId);
}


@Post()
public createPost(@Body() createPostDto:CreatePostDto){
    console.log(createPostDto);
    

}
}
