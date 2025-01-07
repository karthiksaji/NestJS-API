import { Injectable,Inject, Body } from '@nestjs/common';
import { log } from 'console';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {

constructor( 
    @InjectRepository(Post) 
    private postsRepository:Repository<Post>
 ){}
public async createPost(createPostDto:CreatePostDto){
    // let newPost=this.postsRepository.create(createPostDto);
    // newPost=await this.postsRepository.save(newPost);
    // return newPost;
    }

}
