import { IsNotEmpty, MaxLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
{Postagem}

@Entity({ name: "tb_temas"})
export class Tema{
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @MaxLength(100)
    @Column({ length: 100, nullable: false})
    tema: string;

    @IsNotEmpty()
    @MaxLength(100)
    @Column({ length: 100, nullable: false})
    abordagem: string;

    @OneToMany(() => Postagem, (postagem) => postagem.id)
    Postagem: Postagem[]
 
} 