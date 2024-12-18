import {  IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class  CreateUserDto{
@IsString()
@IsNotEmpty()
@MinLength(3)
@MaxLength(10)
firstName:string;

@IsString()
@IsOptional()
@MaxLength(5)
@MinLength(1)
lastName:string;

@IsString()
@IsNotEmpty()
@IsEmail()
email:string;

@IsString()
@IsNotEmpty()
@MaxLength(8)
@Matches( /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,{
    message:
            'Password must be at least 8 characters long and contain both letters and numbers.'
})
password:string;
}