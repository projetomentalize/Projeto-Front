import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";

@Entity({name: "tb_usuarios"})
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @MaxLength(100)
    @Column({ length: 100, nullable: false})
    nome: string;
    
    @IsNotEmpty()
    @MaxLength(255)
    @Column({ length: 255, nullable: false})
    email: string;

    @IsNotEmpty()
    @MaxLength(50)
    @Column({ length: 50, nullable: false})
    senha: string;

    @IsNotEmpty()
    @MaxLength(2000)
    @Column({ length: 2000, nullable: false})
    foto_url: string;

    @IsNotEmpty()
    @MaxLength(50)
    @Column({ length: 50, nullable: false})
    tipo_usuario: string;

    @OneToMany(() => Postagem, (postagem) => postagem.id)
    Postagem: Postagem[]

}