import { Injectable, Req } from '@nestjs/common';
import { JwtAuthService } from 'src/jwt/jwt.service';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FeaturesService {

    constructor(private readonly prisma : PrismaService,
        private jwt: JwtAuthService){}

    async CheckQuestionsTbale(@Req() req:any){

        try{
            // const accestoken = this.jwt.verifyToken(req.cookies["cookie"]);

            // const questions = await this.prisma.questions.create({
            //     data:{
            //         user_name: 'oussama',
            //         question: 'where is the nearest mosque?',
            //         answer: {
            //             create: {
            //                 answer: 'its three blocks away',
            //             },
            //         },
            //     }
            // })

            const questions = await this.prisma.questions.findMany({
                include:{
                    answer: true,
                }
            })
            return (questions);
        }
        catch(error){
            console.log(error);
        }
    }

    async PostQ(Quest:string){
        try{
            if (Quest.length == 0) return ;
            await this.prisma.questions.create({
                data:{
                    question: Quest,
                }
            })
        }
        catch(error){
        }
    }

    async PostA(body: any){

        try{
            await this.prisma.questions.update({
                where:{
                    question: body.answeredQuestion,
                },
                data:{
                    answer: {
                        create: {
                            answer: body.answer ,
                        },
                    },
                },
            })
        }
        catch(error){
        }
    }

}
