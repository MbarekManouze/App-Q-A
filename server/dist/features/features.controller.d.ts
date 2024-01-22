import { FeaturesService } from './features.service';
export declare class FeaturesController {
    private featureservice;
    constructor(featureservice: FeaturesService);
    PostQuestion(body: any): void;
    PostAnswer(body: any): void;
    QuesionsInfos(req: any, body: any): Promise<({
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
    })[] | "Empty">;
}
