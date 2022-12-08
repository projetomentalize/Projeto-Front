import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/usuario.entity';
import { Tema } from './tema/entities/tema.entity';
import { Postagem } from './postagem/entities/postagem.entity';
import { TemaModule } from './tema/tema.module';
import { PostagemModule } from './postagem/postagem.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port:3306,
      username: 'root',
      password: '7887',
      database: 'db_projeto_integrador',
      entities: [Usuario, Tema, Postagem],
      synchronize: true,      
    }),
    TemaModule,
    PostagemModule,
    UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
