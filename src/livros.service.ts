
import { Injectable, NotFoundException } from "@nestjs/common";
import { Livro } from "./livro.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class LivrosService {
    constructor(
          @InjectModel(Livro)
          private livroModel : typeof Livro
    ){}

   async obterTodos(): Promise<Livro[]> {
        return this.livroModel.findAll();
    }

     async obterUm(id: number): Promise<Livro> {
        const livro = await this.livroModel.findByPk(id);
       if (!livro){
        throw new NotFoundException(`Livro com ID ${id} não encontrado`);
       }
       return livro;
    }


    async  criar(livro:Livro) {
        this.livroModel.create(livro);
    }

    async alterar(livro:Livro):Promise<number> {
        const [affectedCount] = await
          this.livroModel.update(livro, {
            where: {
                id: livro.id
            }
        }); 
        return affectedCount;
    }

    async apagar(id: number) {
        try {
            
            const livro: Livro = await this.obterUm(id)
            livro.destroy();
        } catch (error) {
            throw error
        }

   }
}