import { forwardRef, Inject, Injectable, RequestTimeoutException } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-params.dto";
import { AuthService } from "src/auth/providers/auth.service";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user.entity";
import { CreateUserDto } from "../dtos/create-user.dto";
import { ConfigService, ConfigType } from "@nestjs/config";
import profileConfig from "../config/profile.config";

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



public findall(){
    //TEST THE NEW CONFIG
    console.log(this.profileConfiguration);
    
    
}

public async createUser(createUserDto:CreateUserDto){

    const existingUser=undefined;
//check is user exists with same mail

try{
    /* check user exists with the same email*/
    await this.usersRepository.findOne({
    where:{email:createUserDto.email}
});
    }catch(error){
        //might save the details for the exception
        //information which is sensitive
        throw new RequestTimeoutException(
            'unable to process your request at the momemnt please try again later',
            {
                description:'error connecting to database'
            },
        )
}

//create a new user

let newUser=this.usersRepository.create(createUserDto);
newUser=await this.usersRepository.save(newUser);

return newUser;
}
public async findOneById(id:number){
    return await this.usersRepository.findOneBy({
        
    })
}



}