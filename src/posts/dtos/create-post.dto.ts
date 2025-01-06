
import { IsArray, IsDate, IsEnum,IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength, ValidateNested } from "class-validator";
import { postStatus } from "../enums/postStatus.enum";
import { postType } from "../enums/postType.enum";
import { CreatePostMetaOptionsDto } from "./create-post-meta-options.dto";
import { Type } from "class-transformer";

export class CreatePostDto{
    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    title:string;

    @IsEnum(postType)
    @IsNotEmpty()
    postType:postType;

    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/,{
        message:'a slug should be small spaces'
    })

    @IsString()
    @IsNotEmpty()
    slug:string;

    @IsNotEmpty()
    @IsEnum(postStatus)
    status:postStatus;

    @IsString()
    @IsOptional()
    content?:string;

    @IsJSON()
    @IsOptional()
    schema?:string;

    @IsOptional()
    @IsUrl()
    featuredImageUrl?:string;

    @IsDate()
    @IsOptional()
    PublishOn?:Date;

    @IsOptional()
    @IsArray()
    @IsString({each:true})
    @MinLength(3,{each:true})
    tags?:string[];

    @IsOptional()
    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>CreatePostMetaOptionsDto)
    metaOptions:CreatePostMetaOptionsDto[];


}