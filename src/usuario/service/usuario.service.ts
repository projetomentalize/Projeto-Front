import { Injectable } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Usuario } from "../entities/usuario.entity";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>
    ) { }

    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find({
       
        })
    }

    async findById(id: number): Promise<Usuario> {

        let tema = await this.usuarioRepository.findOne({
         
        })

        if (!tema)
            throw new HttpException('Usuário não existe', HttpStatus.NOT_FOUND)

        return tema
    }
    
    findByNome(nome: string): Promise<Usuario[]> {
        throw new Error("Method not implemented.");
    }


    async findByEmail(email: string): Promise<Usuario[]> {
        return await this.usuarioRepository.find({
       
        })
    }

    async criarUsuario(usuario : Usuario): Promise<Usuario>{
        return await this.usuarioRepository.save(usuario)
    }

    async alterarUsuario(usuario : Usuario): Promise<Usuario> {
        let buscarUsuario = await this.findById(usuario.id)

        if(!buscarUsuario|| !usuario.id)
            throw new HttpException('Usuário não existe!', HttpStatus.NOT_FOUND)

            return await this.usuarioRepository.save(usuario)
    }


    async apagarUsuario(id: number): Promise<DeleteResult> {
        let buscarUsuario = await this.findById(id)

        if(!buscarUsuario)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND)

        return await this.usuarioRepository.delete(id)
    }
    
}