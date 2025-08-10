import {DataTypes} from "sequelize"
import { conexaoBanco } from "../config/database/Index.js"

const usuario = conexaoBanco.define('usuario', {

    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
        
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    dataNascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true,        
    },

    genero: {
        type: DataTypes.ENUM("M", "F"),
        allowNull: false
    }

},{
    tableName: "usuarios",
    freezeTableName: true
})

export default usuario