import { BadRequestException, forwardRef, HttpException, HttpStatus, Inject, Injectable, RequestTimeoutException } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-params.dto";
import { AuthService } from "src/auth/providers/auth.service";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user.entity";
import { CreateUserDto } from "../dtos/create-user.dto";
import { ConfigService, ConfigType } from "@nestjs/config";
import profileConfig from "../config/profile.config";
import { error } from "console";

/**
 * class to connect users table and perform bussiness operations 
 */

@Injectable()
export class UsersService{

/**
 * constructor  /**
     * injecting repository for database
*/
 
constructor(
    @InjectRepository(User)
   private usersRepository:Repository<User>,

    @Inject(profileConfig.KEY)
    private readonly profileConfiguration:ConfigType<typeof profileConfig>
   
){}



public findall(
    getUsersParamDto:GetUsersParamDto,
    limit:number,
    page:number,
){
    throw new HttpException({
        status:HttpStatus.MOVED_PERMANENTLY,
        error:'The api endpoint doesnt exist',
        fileName:'users.service.ts',
        lineNumber:88
    },
    HttpStatus.MOVED_PERMANENTLY,
{
    cause:new Error(),
    description:'Occured when the api endpoint was permanently moved'
},);
    
}

public async createUser(createUserDto:CreateUserDto){

    let existingUser=undefined;
//check is user exists with same mail

    try {
        /* check user exists with the same email*/
        existingUser = await this.usersRepository.findOne({
            where: { email: createUserDto.email }
        });
    } catch (error) {
        //might save the details for the exception
        //information which is sensitive
        throw new RequestTimeoutException(
            'unable to process your request at the momemnt please try again later',
            {
                description:'error connecting to database'
            },
        )
}

//handle exception

if(existingUser){
    throw new BadRequestException(
        'user already exists,please check your email'
    )
}

//create a new user

let newUser=this.usersRepository.create(createUserDto);
try{
newUser=await this.usersRepository.save(newUser);
}catch(error){
    throw new RequestTimeoutException(
        'unable to process your request at the momemnt please try again later',
        {
            description:'error connecting to database'
        },
    )
}

return newUser;
}
public async findOneById(id:number){
    let user=undefined;
    try {
      user=await this.usersRepository.findOneBy({
            id,
        })
    } catch (error) {
        throw new RequestTimeoutException(
            'unable to process your request at the momemnt please try again later',
            {
                description:'error connecting to database'
            },
        )
    }

    /*
    user doesnt exist exception
    */
    if(!user){
        throw new BadRequestException('user id doesnt exist')
    }
    return user;


    return await this.usersRepository.findOneBy({
        id
    })
}



}