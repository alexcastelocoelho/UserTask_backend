import {DataTypes} from "sequelize"
import { conexaoBanco } from "../config/database/Index.js"

const tarefa = conexaoBanco.define('tarefa',{

      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    status: {
        type: DataTypes.ENUM("PENDENTE", "CANCELADA", "ATRASADA", "CONCLUIDA"),
        allowNull: false        
    }

},{
    tableName: "tarefas",
    freezeTableName: true
}    
)

export default tarefa