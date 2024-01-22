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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const auth_service_1 = require("./auth.service");
const jwt_service_1 = require("../jwt/jwt.service");
const utils_1 = require("./utils");
let AuthController = class AuthController {
    constructor(prisma, Authservice, jwt) {
        this.prisma = prisma;
        this.Authservice = Authservice;
        this.jwt = jwt;
    }
    Signup(body) {
        this.Authservice.Signup(body);
        return ("allright");
    }
    async Signin(body, res) {
        if (await this.Authservice.Login(body, res)) {
            const Token = this.jwt.generateToken(body);
            res.status(200).json({ msg: "cookie setted" });
            return (true);
        }
        else
            return (false);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('SignUp'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [utils_1.SignupDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "Signup", null);
__decorate([
    (0, common_1.Post)('Login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "Signin", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        auth_service_1.AuthService,
        jwt_service_1.JwtAuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map