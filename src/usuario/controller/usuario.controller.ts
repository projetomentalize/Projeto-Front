import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common/decorators";
import { HttpStatus } from "@nestjs/common/enums";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../service/usuario.service";

@Controller('/usuarios')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
        return this.usuarioService.findById(id)
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Usuario[]> {
        return this.usuarioService.findByNome(nome)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.criarUsuario(usuario)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.alterarUsuario(usuario)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usuarioService.apagarUsuario(id)
    }

}