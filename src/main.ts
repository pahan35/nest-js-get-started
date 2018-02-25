import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { ValidationPipe } from './validation.pipe';
import { RolesGuard } from './roles.guard';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
    app.useGlobalPipes(new ValidationPipe());
    app.app.useGlobalGuards(new RolesGuard());
	await app.listen(3000);
}

bootstrap();
