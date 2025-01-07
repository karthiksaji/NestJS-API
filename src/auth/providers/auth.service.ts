import { Injectable,Inject,forwardRef } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
constructor( 
    @Inject(forwardRef(()=>UsersService))
    private readonly usersService:UsersService
){}



}
