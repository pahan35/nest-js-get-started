import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import {CatsController} from "./cats/cats.controller";

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  components: [],
})

export class ApplicationModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(LoggerMiddleware)
            .with('ApplicationModule')
            .forRoutes(CatsController);
    }
}