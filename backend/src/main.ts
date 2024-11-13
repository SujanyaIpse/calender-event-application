import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for all origins
  app.enableCors({
    origin: true,  // Allows any origin
    credentials: true,  // Enables cookies and other credentials
  });

  // Start the server on the specified port or default to 3000
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
