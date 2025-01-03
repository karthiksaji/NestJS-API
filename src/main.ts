import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
    transform:true
  }) );

//swagger documentation

const config=new DocumentBuilder()
  .setTitle('NestJs Masterclass Blog app API')
  .setDescription('use base url http://localhost:3000/api')
  .setTermsOfService('http://localhost:3000/terms-of-service')
  .setLicense('MIT LICENSE','https://github.com/nestjs/nest/blob/master/LICENSE')
  .addServer("http://localhost:3000")
  .setVersion('1.0').build();

// instantiate document

const document=SwaggerModule.createDocument(app,config);
SwaggerModule.setup('api',app,document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
