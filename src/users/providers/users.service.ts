import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-params.dto";
import { AuthService } from "src/auth/providers/auth.service";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user.entity";
import { CreateUserDto } from "../dtos/create-user.dto";

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
){}

public async createUser(createUserDto:CreateUserDto){

//check is user exists with same mail

const existingUser =await this.usersRepository.findOne({
    where:{email:createUserDto.email}
});

//create a new user

let newUser=this.usersRepository.create(createUserDto);
newUser=await this.usersRepository.save(newUser);

return newUser;
}



}