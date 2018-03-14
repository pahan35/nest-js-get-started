import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { ValidationPipe } from './validation.pipe';
import {LoggingInterceptor} from "./logging.interceptor";

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
    app.useGlobalInterceptors(new LoggingInterceptor());
    app.useGlobalPipes(new ValidationPipe());
	await app.listen(3000);
}

bootstrap();
