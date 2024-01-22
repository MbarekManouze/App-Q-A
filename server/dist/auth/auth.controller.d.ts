import { PrismaService } from "src/prisma.service";
import { AuthService } from './auth.service';
import { JwtAuthService } from '../jwt/jwt.service';
import { SignupDTO } from './utils';
export declare class AuthController {
    private readonly prisma;
    private Authservice;
    private jwt;
    constructor(prisma: PrismaService, Authservice: AuthService, jwt: JwtAuthService);
    Signup(body: SignupDTO): string;
    Signin(body: any, res: any): Promise<boolean>;
}
