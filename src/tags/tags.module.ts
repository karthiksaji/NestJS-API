import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { TagsService } from './providers/tags.service';
import { UsersController } from 'src/users/users.controller';
import { UsersModule } from 'src/users/users.module';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  controllers: [TagsController],
  imports:[TypeOrmModule.forFeature([Tag])],
  providers: [TagsService],
  exports:[TagsService]
 })
export class TagsModule {
 
}
