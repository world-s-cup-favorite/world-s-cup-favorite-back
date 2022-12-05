import { Logger, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  app.setGlobalPrefix("api/v1");
  app.enableCors();
  const logger = new Logger("Main");
  const configService = app.get(ConfigService);
  const PORT = Number(configService.get("PORT")) || 3000;
  await app.listen(PORT, "0.0.0.0", () => {
    logger.log(`app running on port  ${PORT}`);
  });
}
bootstrap();
