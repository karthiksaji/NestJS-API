import { Controller,Get,Patch,Put,Post,Delete,Param,Body,Req,Query,Headers,Ip,ParseIntPipe, DefaultValuePipe} from '@nestjs/common';
import { request } from 'http';
import { Request } from '@nestjs/common';


@Controller('users')
export class UsersController {
    @Get('/:id?')
    public getUsers(
        @Param('id', ParseIntPipe) id:number | undefined,
        @Query('limit',new DefaultValuePipe(10), ParseIntPipe) limit:number,
        @Query('page',new DefaultValuePipe(1),ParseIntPipe) page:number, ){
        console.log(limit);
        console.log(page);
        
        
        return "this is the return statement";
    }

    @Post()
    public postUsers(@Body() request:any,
                    @Headers() headers:any,
                    @Ip() ip:any){
        console.log(request);
        console.log(headers);
        console.log(ip);
        
        
        
        return "this is the post request";
    }
    
}
