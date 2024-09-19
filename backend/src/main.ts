import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { RedisIoAdapter } from './other/redis';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const redisIoAdapter = new RedisIoAdapter(app);
  await redisIoAdapter.connectToRedis();

  app.useWebSocketAdapter(redisIoAdapter);
  const config = new DocumentBuilder()
    .setTitle('Euphoria messenger API')
    .setVersion(process.env.npm_package_version)
    .setDescription('POWERED BY PHOENIX SOLUTIONS and AKBARKHON !AVAZKHONOV')
    .addServer('/', 'Development server')
    .addServer('/api', 'Production server')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
    },
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Euphoria messenger API',
    customfavIcon: 'https://phoenix-solutions.uz/image%2073.png',
  });
  app.enableCors();
  await app.listen(4000);
}
bootstrap();
