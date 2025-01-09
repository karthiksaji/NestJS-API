import { Body, Controller, Delete, Get, Param,ParseIntPipe,Patch,Post, Query } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { create } from 'domain';
import { CreatePostDto } from './dtos/create-post.dto';
import { log } from 'console';
import { PatchPostDto } from './dtos/patch-post.dto';
import { query } from 'express';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
constructor(private readonly postService:PostsService){
}

@Get('/:userId?')
public getPosts(@Param('userId') userId:string){
   return this.postService.findall(userId);
}


@ApiOperation({
    summary:'api updates existing blog post'
})
@ApiResponse({
    status:200,
    description:'you get aa 200 response if your post is created sucessfully'
})

@Post()
public createPost(@Body() createPostDto:CreatePostDto ){
       
        console.log(createPostDto);
        return this.postService.create(createPostDto);
    }

@Patch()
public updatePost(@Body() patchPostDto:PatchPostDto){
    console.log(patchPostDto);
    return this.postService.update(patchPostDto);
    
}

@Delete()
public deletePost(@Query('id',ParseIntPipe) id:number){
    return this.postService.delete(id);
}
}
