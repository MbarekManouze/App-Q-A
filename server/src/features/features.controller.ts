import { Controller , Req, Get, Body, Post} from '@nestjs/common';
import { FeaturesService } from './features.service';

@Controller('features')
export class FeaturesController {

    constructor(private featureservice: FeaturesService){}

    @Post('PostQuestion')
    PostQuestion(@Body() body:any){
        this.featureservice.PostQ(body.question);
    }

    @Post('PostAnswer')
    PostAnswer(@Body() body:any){
        this.featureservice.PostA(body);
    }

    @Get('Quetions&Answers')
    async QuesionsInfos(@Req() req: any, @Body() body:any){

        const QandA = await this.featureservice.CheckQuestionsTbale(req);
        if (QandA)
            return (QandA);
        return('Empty');
    }
}
