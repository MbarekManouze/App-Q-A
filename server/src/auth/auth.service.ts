import { Injectable, Res } from '@nestjs/common';
import { PrismaService } from "src/prisma.service";
import { JwtAuthService } from '../jwt/jwt.service';

@Injectable()
export class AuthService {

    constructor(private readonly prisma: PrismaService,
        private jwt: JwtAuthService){}

    async Signup(Body:any){
        try{
            await this.prisma.user.create({
                data :{
                    Email: Body.email,
                    Password: Body.password,
                }
            })
            return (true);
        }
        catch(error){
            return (false);
        }
    }

    async Login(Body:any, @Res() res){

        try{
            const user = await this.prisma.user.findUnique({
                where:{
                    Email: Body.email, 
                }
            })
            if (user){
                const Token = this.jwt.generateToken(Body);

                res.cookie('cookie',Token, {
                    httponly: true,
                }).status(200);;
                return true;
            }
            return false;
            }
        catch(error){
            return false;
        }
    }

}
