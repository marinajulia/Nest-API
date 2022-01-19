import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService], //assim que ele pode resolver as dependencias do controller
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}
