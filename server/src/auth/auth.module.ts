import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaService } from "src/prisma.service";
import { JwtAuthService } from '../jwt/jwt.service';

@Module({
  providers: [AuthService, PrismaService, JwtAuthService]
})
export class AuthModule {}
