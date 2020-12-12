//import { IsNotEmpty, MinLength, IsEmail } from 'class-validator';

export class UserDto {
  //  @IsNotEmpty()
    readonly firstname: string;


    //@IsNotEmpty()
    readonly lastname: string;
    
    
    //@IsNotEmpty()
    //@IsEmail()
    readonly email: string;
    
    
    //@IsNotEmpty()
    //@MinLength(6)
    readonly password: string;
    
    //@IsNotEmpty()
    readonly level: string;
    
    //@IsNotEmpty()
    readonly description: string;
}