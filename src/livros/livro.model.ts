import { Table, Model, Column, DataType, AllowNull } from "sequelize-typescript";

@Table
export class Livro extends Model<Livro> {

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
    })
    titulo: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
    })
    autor: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    anoPublicacao: number;

    @Column({
        type: DataType.STRING(20),
        allowNull: true,
    })
    isbn: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: true,
    })
    genero: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    numPaginas: number;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    descricao: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: true,
    })
    preco: number;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    imagemUrl: string;
}

