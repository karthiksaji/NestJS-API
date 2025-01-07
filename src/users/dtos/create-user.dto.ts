import {  IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class  CreateUserDto{
@IsNumber()
id:number;

@IsString()
@IsNotEmpty()
@MinLength(3)
@MaxLength(96)
firstName:string;

@IsString()
@IsOptional()
@MaxLength(5)
@MaxLength(96)
lastName:string;

@IsString()
@IsNotEmpty()
@IsEmail()
@MaxLength(96)
email:string;

@IsString()
@IsNotEmpty()
@MaxLength(96)
@Matches( /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,{
    message:
            'Password must be at least 8 characters long and contain both letters and numbers.'
})
password:string;
}