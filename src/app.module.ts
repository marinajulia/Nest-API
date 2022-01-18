import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { CatsController } from './cats/cats.controller';
import { CatsControllerWithService} from './cats/cats.controller';
import { CatsService } from 'src/cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, CatsControllerWithService],
  providers: [AppService, CatsService], //assim que ele pode resolver as dependencias do controller
})
export class AppModule {}
