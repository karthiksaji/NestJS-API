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
}



}