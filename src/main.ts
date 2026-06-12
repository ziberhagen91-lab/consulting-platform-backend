import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./common/filters/http-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalFilters(
    new HttpExceptionFilter(),
  );

  app.enableCors({
    origin: [
      "http://localhost:3000",
      "https://consulting-platform-frontend.vercel.app",
    ],
    credentials: true,
  });

  const port = process.env.PORT || 4000;

  await app.listen(port, "0.0.0.0");

  console.log(`🚀 Backend running on port ${port}`);
}

bootstrap();