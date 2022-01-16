import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Query, Redirect, Res } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './Dto/CreateCatDto';
import express, { Request, Response } from 'express';

@Controller('cats')
export class CatsController {
    @Post()
    @HttpCode(204)//posso adicionar pára manipular o retorno, já que sempre será 200
    create() {
        return 'This action adds a new cat';
    }

    @Get()
    // @Redirect('https://nestjs.com', 301) para recirecionar para algum lugar
    findAll(): any {
        return {
            "statusCode": 200 //para retornar mais de uma coisa
        }
    }

    @Post('teste')
    @Header('Cache-Control', 'none')//para especificar um cabeçalho de resposta personalizado
    createHeader() {
        return 'post teste';
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };//Os valores retornados substituirão quaisquer argumentos passados ​​ao @Redirect()decorador
        }
    }

    @Get(':id')
    findOne(@Param() params): string {//para trabalhar com o parâmetro
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

    @Get('async')
    async findAllAsync(): Promise<any[]> {
        return [];
    }

    @Get('array')
    findAllArray(): Observable<any[]> {
        return of([]);
    }

    @Post('dto')
    async createPost(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: CreateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }

    @Post('res')
    createRes(@Res() res: Response) {
        res.status(HttpStatus.CREATED).send();
    }

    @Get('res')
    findAllRes(@Res() res: Response) {
        res.status(HttpStatus.OK).json([]);
    }

    @Get('maneiramelhorqueadecima')
    findAllMelhor(@Res({ passthrough: true }) res: Response) {
        res.status(HttpStatus.OK); //essa é a melhor maneira de retorno pois não depende outra biblioteca
        return [];
    }
}