import { Controller,Get,Patch,Put,Post,Delete,Param,Body,Req,Query,Headers,Ip,ParseIntPipe} from '@nestjs/common';
import { request } from 'http';
import { Request } from '@nestjs/common';


@Controller('users')
export class UsersController {
    @Get('/:id?')
    public getUsers(
        @Param('id',ParseIntPipe) id:number | undefined,
        @Query('limit',ParseIntPipe) limit:number,
        @Query('page',ParseIntPipe) page:number, ){
        console.log(typeof limit);
        console.log(typeof page);
        
        
        return "this is the return statement";
    }

    @Post()
    public postUsers(@Body() request:any){
        console.log(request);
        
        return "this is the post statement";
    }
    
}
