"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesService = void 0;
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("../jwt/jwt.service");
const prisma_service_1 = require("../prisma.service");
let FeaturesService = class FeaturesService {
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    async CheckQuestionsTbale(req) {
        try {
            const questions = await this.prisma.questions.findMany({
                include: {
                    answer: true,
                }
            });
            return (questions);
        }
        catch (error) {
            console.log(error);
        }
    }
    async PostQ(Quest) {
        try {
            if (Quest.length == 0)
                return;
            await this.prisma.questions.create({
                data: {
                    question: Quest,
                }
            });
        }
        catch (error) {
        }
    }
    async PostA(body) {
        try {
            await this.prisma.questions.update({
                where: {
                    question: body.answeredQuestion,
                },
                data: {
                    answer: {
                        create: {
                            answer: body.answer,
                        },
                    },
                },
            });
        }
        catch (error) {
        }
    }
};
exports.FeaturesService = FeaturesService;
__decorate([
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FeaturesService.prototype, "CheckQuestionsTbale", null);
exports.FeaturesService = FeaturesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_service_1.JwtAuthService])
], FeaturesService);
//# sourceMappingURL=features.service.js.map