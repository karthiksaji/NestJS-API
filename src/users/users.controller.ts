import { Controller,Get,Patch,Put,Post,Delete,Param,Body,Req,Query,Headers,Ip,ParseIntPipe, DefaultValuePipe,ValidationPipe} from '@nestjs/common';
import { request } from 'http';
import { Request } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-params.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService,){
       
    }

    @Get('/:id?')
    public getUsers(
        @Param() getUserParamDto:GetUsersParamDto,
        @Query('limit',new DefaultValuePipe(10), ParseIntPipe) limit:number,
        @Query('page',new DefaultValuePipe(1),ParseIntPipe) page:number, ){
        console.log(getUserParamDto);
        console.log(page);
        
        
        return this.usersService.findall(getUserParamDto,limit,page);
        return this.usersService.findOneById();
    }

    @Post()
    public postUsers(@Body() createUserDto:CreateUserDto ){
        console.log(createUserDto instanceof CreateUserDto);  
        
        
        return "this is the post request";
    }

    @Patch()
    public patchUser(@Body() patchUserDto:PatchUserDto){
        return patchUserDto;
    }
    
}
