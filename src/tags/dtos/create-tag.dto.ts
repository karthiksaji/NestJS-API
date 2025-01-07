import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty,Matches, IsString, MaxLength, MinLength, IsOptional, IsJSON, IsUrl } from "class-validator";

export class CreateTagDto{
    @ApiProperty()
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    @MaxLength(256)
    name:string;

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

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    description?:string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsJSON()
    schema?:string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUrl()
    @MaxLength(1024)
    featuredImageUrl?:string;
}