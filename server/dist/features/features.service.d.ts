import { JwtAuthService } from 'src/jwt/jwt.service';
import { PrismaService } from 'src/prisma.service';
export declare class FeaturesService {
    private readonly prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtAuthService);
    CheckQuestionsTbale(req: any): Promise<({
        answer: {
            id: number;
            userId: number;
            answer: string;
            dateSent: Date;
        }[];
    } & {
        id: number;
        user_name: string;
        question: string;
        dateSent: Date;
    })[]>;
    PostQ(Quest: string): Promise<void>;
    PostA(body: any): Promise<void>;
}
