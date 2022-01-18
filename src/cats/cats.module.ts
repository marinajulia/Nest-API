import { Global, Module } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { CatsControllerWithService } from './cats.controller';

@Global()
@Module({
  imports: [],
  controllers: [CatsControllerWithService],
  providers: [CatsService],
  exports:[CatsService] //Com o exports, qualquer módulo que importe CatsModule tem acesso ao CatsService,
})                      //e compartilhará a mesma instância com todos os outros módulos que o importam também

export class CatsModule {
    constructor(private catsService: CatsService){} //injeção de provedores
}
