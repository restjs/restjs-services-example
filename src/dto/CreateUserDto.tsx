import {Length, IsEmail, IsAlpha} from "class-validator";

export default class CreateUserDto{

    @Length(3,15)
    @IsAlpha()
    name : string;

    @Length(3,15)
    @IsAlpha()
    last_name : string;

    @IsEmail({}, {message : "Please enter a valid email."})
    email : string;

}
