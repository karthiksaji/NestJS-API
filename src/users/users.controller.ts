import { Controller,Get,Patch,Put,Post,Delete,Param,Body,Req,Query,Headers,Ip,ParseIntPipe} from '@nestjs/common';
import { request } from 'http';
import { Request } from '@nestjs/common';


@Controller('users')
export class UsersController {
    @Get('/:id/:optional?')
    public getUsers(@Param('id') id:any,@Query('limit') limit:any){
        console.log(typeof id);
        console.log(typeof limit);
        
        
        return "this is the return statement";
    }

    @Post()
    public postUsers(@Body() request:any){
        console.log(request);
        
        return "this is the post statement";
    }
    
}
