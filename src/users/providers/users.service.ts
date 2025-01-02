import { Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-params.dto";

@Injectable()
export class UsersService{

public findall(
    getUserParamDto:GetUsersParamDto,
    limit:number,
    page:number,)
    {
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

public findOneById(id:string){
  return{
    id:1234,
    name:'karthik',
    email:'kar@gmail.com'
  
};
}

}