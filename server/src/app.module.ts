import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import {PrismaService} from './prisma.service'
import { AuthService } from './auth/auth.service';
import { JwtAuthService } from './jwt/jwt.service';
import { FeaturesController } from './features/features.controller';
import { FeaturesService } from './features/features.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController, AuthController, FeaturesController],
  providers: [AppService, PrismaService, AuthService, JwtAuthService, FeaturesService],
})
export class AppModule {}
