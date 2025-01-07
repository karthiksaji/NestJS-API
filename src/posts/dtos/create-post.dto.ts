
import { IsArray, IsDate, IsEnum,IsISO8601,IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, maxLength, MaxLength, MinLength, ValidateNested } from "class-validator";
import { postStatus } from "../enums/postStatus.enum";
import { postType } from "../enums/postType.enum";
import { CreatePostMetaOptionsDto } from "./create-post-meta-options.dto";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePostDto{
    @IsString()
    @MinLength(4)
    @MaxLength(512)
    @IsNotEmpty()
    @ApiProperty({
        description:'this is the title for the blog spot',
        example:'this is the title'
    })
    title:string;

    @IsEnum(postType)
    @IsNotEmpty()
    @ApiProperty({
        enum:postType,
        description:"possible values are 'post','page',story','series'"
    })
    posttype:postType;

    @IsString()
    @IsNotEmpty()
    @MaxLength(256)
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/,{
        message:'a slug should be small spaces'
    })
    @ApiProperty({
        description:"for eg,my-url",
        example:'my-blog-post'
    })
    slug:string;

    @IsNotEmpty()
    @IsEnum(postStatus)
    @ApiProperty({
        enum:postStatus,
        description:"possible values 'draft','scheduled','review','published'"
    })
    status:postStatus;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        description:"this is the content of the post",
        example:"the post content "
    })
    content?:string;

    @IsJSON()
    @IsOptional()
    @ApiPropertyOptional({
        description:"serialize your json object else a validation error will be thrown"
    })
    schema?:string;

    @IsOptional()
    @IsUrl()
    @MaxLength(1024)
    @ApiPropertyOptional({
        description:"featured image for your blog post",
        example:'http://localhost.com/images/image1.jpg'
    })
    featuredImageUrl?:string;

    @IsISO8601()
    @IsOptional()
    @ApiPropertyOptional({
        description:"the date on which  the blog is published",
        example:'2024-03-16t07:46:32+000',
    })
    publishOn?:Date;

    @IsOptional()
    @IsArray()
    @IsString({each:true})
    @MinLength(3,{each:true})
    @ApiPropertyOptional({
        description:"array of tags passed as string values",
        example:['nestjs','typescript'],
    })
    tags?:string[];

    @IsOptional()
    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>CreatePostMetaOptionsDto)
    @ApiPropertyOptional({
        type:'array',
        required:false,
        items:{
            type:'object',
            properties:{
                key:{
                    type:'string',
                    description:"the key can be any string identifier for your meta option",
                    example:'sidebarenabled'
                },
                value:{
                    type:'any',
                    description:"any value can be any string identifier for your meta option",
                    example:true
                }
            }
        }
    })
    metaOptions?:CreatePostMetaOptionsDto[];


}