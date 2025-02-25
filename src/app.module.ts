import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Post } from './posts/post.entity';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from "./config/app.config"
import databaseConfig from './config/database.config';



const ENV=process.env.NODE_ENV;


@Module({
  imports: [UsersModule, PostsModule, AuthModule,
    ConfigModule.forRoot({
      isGlobal:true,
      // envFilePath:['.env.development'],
      envFilePath:!ENV?'.env':`.env.${ENV}`,
      load:[appConfig,databaseConfig]
      }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(configService:ConfigService)=>({
      type:'postgres',
      // entities:[User,Post],
      autoLoadEntities:true,/*configService.get('database.autoLoadEntities')*/
      synchronize:true,/*configService.get('database.synchronize')*/
      port:5432,
      username:'postgres',
      password:'password',
      host:'localhost',
      database:'nestjs-blog',
      // port:+configService.get('database.port'),
      // username:configService.get('database.user'),
      // password:configService.get('database.password'),
      // host:configService.get('database.host'),
      // database:configService.get('database.name'),
        }),
    }),
    TagsModule,
    MetaOptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
