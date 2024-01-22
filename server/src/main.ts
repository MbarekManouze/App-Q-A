import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as cookieParser from "cookie-parser";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );


  app.use(cookieParser());

  app.use(cors({
    credentials: true,
    origin: "http://localhost:3000", // Replace with the domain of your frontend
  }));

  await app.listen(5000);
}

bootstrap();
