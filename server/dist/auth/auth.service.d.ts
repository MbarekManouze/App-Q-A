import { PrismaService } from "src/prisma.service";
import { JwtAuthService } from '../jwt/jwt.service';
export declare class AuthService {
    private readonly prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtAuthService);
    Signup(Body: any): Promise<boolean>;
    Login(Body: any, res: any): Promise<boolean>;
}
