import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-params.dto";
import { AuthService } from "src/auth/providers/auth.service";

/**
 * class to connect users table and perform bussiness operations 
 */

@Injectable()
export class UsersService{

/**
 * constructor
 */

constructor(
    @Inject(forwardRef(()=>AuthService))
    private readonly authService:AuthService, 
   ){}

/**
 * to get all users from the database
 */

public findall(
    getUserParamDto:GetUsersParamDto,
    limit:number,
    page:number,)
    {
        const isAuth=this.authService.isAuth();
        console.log(isAuth);
        
        return[
            {
                firstname:'john',
                email:'katyh@gmail.com'
            },
            {
                firstname:'hari',
                email:'hari@getMaxListeners.com'
            }
        ];
    }

/**
 * to get specific user by id
 */

public findOneById(id:string){
  return{
    id:1234,
    name:'karthik',
    email:'kar@gmail.com'
  
};
}

}