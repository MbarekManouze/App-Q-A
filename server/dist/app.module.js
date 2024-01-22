"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_controller_1 = require("./auth/auth.controller");
const auth_module_1 = require("./auth/auth.module");
const prisma_service_1 = require("./prisma.service");
const auth_service_1 = require("./auth/auth.service");
const jwt_service_1 = require("./jwt/jwt.service");
const features_controller_1 = require("./features/features.controller");
const features_service_1 = require("./features/features.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule],
        controllers: [app_controller_1.AppController, auth_controller_1.AuthController, features_controller_1.FeaturesController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService, auth_service_1.AuthService, jwt_service_1.JwtAuthService, features_service_1.FeaturesService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map