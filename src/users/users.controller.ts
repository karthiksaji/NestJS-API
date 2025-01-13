import { Controller,Get,Patch,Put,Post,Delete,Param,Body,Req,Query,Headers,Ip,ParseIntPipe, DefaultValuePipe,ValidationPipe} from '@nestjs/common';
import { request } from 'http';
import { Request } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-params.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
    constructor(private readonly usersService:UsersService,){
       
    }

    @Get('/:id?')
    @ApiOperation({
        summary:'it fetches a list of registered users on the application'
    })
    @ApiResponse({
        status:200,
        description:'users fetched sucessfully based on the query'
    })
    @ApiQuery({
        name:'limit',
        type:'number',
        required:false,
        description:'the number of entries returned per query',
        example:10,
    })
    @ApiQuery({
        name:'page',
        type:'number',
        required:false,
        description:'the position of the page number that you want to return',
        example:10,
    })
    public getUsers(
        @Param() getUserParamDto:GetUsersParamDto,
        @Query('limit',new DefaultValuePipe(10), ParseIntPipe) limit:number,
        @Query('page',new DefaultValuePipe(1),ParseIntPipe) page:number, ){
        console.log(getUserParamDto);
        console.log(page);
      
        
        
        return this.usersService.findall(getUserParamDto,limit,page);
       
    }
    // @Get()
    // public getUsersn(){
    //     return this.usersService.findall();
    // }

    @Post()
    public postUsers(@Body() createUserDto:CreateUserDto ){
       
        
        return this.usersService.createUser(createUserDto);
    }

    @Patch()
    public patchUser(@Body() patchUserDto:PatchUserDto){
        return patchUserDto;
    }
    
}
