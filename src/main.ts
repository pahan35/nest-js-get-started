import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { ValidationPipe } from './validation.pipe';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	await app.listen(3000);
    app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
