import { Injectable,Inject, Body } from '@nestjs/common';
import { log } from 'console';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { create } from 'domain';

@Injectable()
export class PostsService {

constructor( 
    @InjectRepository(Post) 
    private readonly postsRepository:Repository<Post>,
    /**
     * injecting post repository
     */
    @InjectRepository(MetaOption)
    public readonly metaOptionsRepository:Repository<MetaOption>
 ){}
public async create(@Body() createPostDto:CreatePostDto){
   
    let post=this.postsRepository.create(createPostDto)

    return await this.postsRepository.save(post);
    // newPost=await this.postsRepository.save(newPost);
    // return newPost;
    }

}
