import { Controller,Get,Patch,Put,Post,Delete,Param,Body,Req,Query,Headers,Ip,ParseIntPipe, DefaultValuePipe} from '@nestjs/common';
import { request } from 'http';
import { Request } from '@nestjs/common';


@Controller('users')
export class UsersController {
    @Get('/:id?')
    public getUsers(
        @Param('id',new DefaultValuePipe(10), ParseIntPipe) id:number | undefined,
        @Query('limit',new DefaultValuePipe(1), ParseIntPipe) limit:number,
        @Query('page',ParseIntPipe) page:number, ){
        console.log(limit);
        console.log(page);
        
        
        return "this is the return statement";
    }

    @Post()
    public postUsers(@Body() request:any){
        console.log(request);
        
        return "this is the post statement";
    }
    
}
