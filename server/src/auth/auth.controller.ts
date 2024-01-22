import { Controller, Body, Post, Get, Res, Req } from '@nestjs/common';
import { PrismaService } from "src/prisma.service";
import { AuthService } from './auth.service';
import { JwtAuthService } from '../jwt/jwt.service';
import { SignupDTO } from './utils';



@Controller('auth')
export class AuthController {

    constructor(private readonly prisma: PrismaService,
                private Authservice: AuthService,
                private jwt: JwtAuthService){}


    @Post('SignUp')
    Signup(@Body() body:SignupDTO){
        this.Authservice.Signup(body);
        return ("allright");
    }

    @Post('Login')
    async Signin(@Body() body:any, @Res() res){
        if (await this.Authservice.Login(body, res))
        {
            const Token = this.jwt.generateToken(body);
            res.status(200).json({ msg: "cookie setted" });
            return (true);
        }
        else
            return (false);
    }
}
