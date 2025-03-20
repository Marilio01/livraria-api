import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosController } from './livros.controler';
import { LivrosService } from './livros.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Livro } from './livro.model';
import { ConfigModule } from '@nestjs/config/dist/config.module';

@Module({imports:[
      ConfigModule.forRoot(),
      SequelizeModule.forRoot({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: process.env.MEU_USUARIO_BANCO_DADOS,
        password: process.env.MINHA_SENHA_BANCO_DADOS,
        database: 'livraria',
        autoLoadModels: true,
        synchronize: true,
      }),
      SequelizeModule.forFeature([Livro])
    ],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
