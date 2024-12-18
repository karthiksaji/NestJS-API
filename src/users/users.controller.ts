import { Controller,Get,Patch,Put,Post,Delete,Param,Body,Req,Query,Headers,Ip,ParseIntPipe, DefaultValuePipe,ValidationPipe} from '@nestjs/common';
import { request } from 'http';
import { Request } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';


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
    public postUsers(@Body(new ValidationPipe()) createUserDto:CreateUserDto 
                   ){
        console.log(createUserDto);  
        
        
        return "this is the post request";
    }
    
}
