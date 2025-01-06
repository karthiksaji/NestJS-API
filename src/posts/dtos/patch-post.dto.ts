import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty,IsInt } from "class-validator";
import { CreatePostDto } from "./create-post.dto";


export class PatchPostDto extends PartialType(CreatePostDto){
    @ApiProperty({
        description:'the id of the post that needs to be updated',
    })
    @IsInt()
    @IsNotEmpty()
    id:number;
}