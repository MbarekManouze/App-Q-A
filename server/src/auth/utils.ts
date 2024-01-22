import { IsNotEmpty , IsEmail, Length} from "class-validator";

export class SignupDTO {

    @IsNotEmpty({ message: 'something went wrong' })
    @Length(4, 12, { message: 'something went wrong' })
    readonly password: string;

    @IsNotEmpty({ message: 'something went wrong' })
    @IsEmail({} ,  {message: 'something went wrong' })
    readonly email: string;
}