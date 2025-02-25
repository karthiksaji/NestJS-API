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
import { PatchPostDto } from '../dtos/patch-post.dto';
import { BadRequestException, forwardRef, HttpException, HttpStatus, RequestTimeoutException } from "@nestjs/common";


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
            // author:true, /* eager in post entity*/
            // tags:true,
        }
    });
    return posts;
    }

public async update(patchPostDto:PatchPostDto){
    let tags=undefined;
    let post=undefined;

    try {
       tags= await this.tagsService.findMultipleTags(patchPostDto.tags);
    } catch (error) {
        throw new RequestTimeoutException(
            'unable to process your request at the momemnt please try again later',
            {
                description:'error connecting to database'
            },
        )
    }
   
     /**
     * If tags were not found
     * Need to be equal number of tags
     */
     if (!tags || tags.length !== patchPostDto.tags.length) {
        throw new BadRequestException(
          'Please check your tag Ids and ensure they are correct',
        );
      }
  
      // Find the Post
      try {
        // Returns null if the post does not exist
        post = await this.postsRepository.findOneBy({
          id: patchPostDto.id,
        });
      } catch (error) {
        throw new RequestTimeoutException(
          'Unable to process your request at the moment please try later',
          {
            description: 'Error connecting to the database',
          },
        );
      }
  
      if (!post) {
        throw new BadRequestException('The post Id does not exist');
      }
  
    /**
     * update the properties
     */
    post.title=patchPostDto.title??post.title;
    post.content=patchPostDto.content??post.content;
    post.status=patchPostDto.status??post.status;
    post.posttype=patchPostDto.posttype??post.posttype;
    post.slug=patchPostDto.slug??post.slug;
    post.featuredImageUrl=
    patchPostDto.featuredImageUrl??post.featuredImageUrl;
    post.publishOn=patchPostDto.publishOn??post.publishOn;

    //assign the new tags
    post.tags=tags;
    //save the post and return
    try {
        await this.postsRepository.save(post);
      } catch (error) {
        throw new RequestTimeoutException(
          'Unable to process your request at the moment please try later',
          {
            description: 'Error connecting to the database',
          },
        );
      }
      return post;
    }

public async delete(id:number){
    //deleting the post
    await this.postsRepository.delete(id);
     //confirmation
    return {deleted:true,id};
}

}
