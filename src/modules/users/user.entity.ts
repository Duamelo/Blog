import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { IntegerDataType } from 'sequelize/types';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    })
     id: IntegerDataType;

     @Column({
         type: DataType.STRING,
         allowNull: false,
     })
     firstname: string;

     @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastname: string;


    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.STRING,
        
        allowNull: false,
    })
    description: string;


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    level: string;
}