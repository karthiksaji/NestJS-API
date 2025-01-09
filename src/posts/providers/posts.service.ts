import { Injectable,Inject, Body } from '@nestjs/common';
import { log } from 'console';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { create } from 'domain';
import { TagsService } from 'src/tags/providers/tags.service';

@Injectable()
export class PostsService {

constructor( 
    @InjectRepository(Post) 
    private readonly postsRepository:Repository<Post>,
    /**
     * injecting post repository
     */
    @InjectRepository(MetaOption)
    private  readonly metaOptionsRepository:Repository<MetaOption>,
    private readonly usersService:UsersService,
    private readonly tagsService:TagsService,
/**
 * going to inject tgs services
 */

 ){}
public async create(@Body() createPostDto:CreatePostDto){

    //find author from the database based on authorid
    let author=await this.usersService.findOneById(createPostDto.authorId);

    let tags=await this.tagsService.findMultipleTags(createPostDto.tags)

    //create a post 
    let post=this.postsRepository.create({
        ...createPostDto,
        author:author,
        tags:tags,
    })
    return await this.postsRepository.save(post);

    // newPost=await this.postsRepository.save(newPost);
    // return newPost;
    }

    

public async findall(userId:string){
    let posts=await this.postsRepository.find({
        relations:{
            metaOptions:true,
            author:true, /* eager in post entity*/
        }
    });
    return posts;
    }

public async delete(id:number){
    //deleting the post
    await this.postsRepository.delete(id);
     //confirmation
    return {deleted:true,id};
}

}
