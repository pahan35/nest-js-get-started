import { Module, NestModule, MiddlewaresConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsModule } from './cats/cats.module';
import { loggerMiddleware } from './common/middlewares/logger.middleware';
import {CatsController} from "./cats/cats.controller";

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  components: [],
})

export class ApplicationModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(loggerMiddleware).forRoutes(CatsController);
    }
}