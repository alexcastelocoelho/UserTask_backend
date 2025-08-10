import { where } from "sequelize"
import tarefaModel from "../model/TarefaModel.js"

const tarefaRepository = {

    async create(tarefaDto){
        const resposta = await tarefaModel.create(tarefaDto)
        return resposta

    },

     async findAll() {
        const resposta = await tarefaModel.findAll()
        return resposta
    },

    
    async findByPk(id) {
        const resposta = await tarefaModel.findByPk(id)
        return resposta

    },

    async update(tarefaId, tarefaDtoAtualizar ) {
         await tarefaModel.update(tarefaDtoAtualizar, {
            where:{id: tarefaId}
        })        
    },

    async destroy(tarefaId){
        const resposta = await tarefaModel.destroy({where:{
            id: tarefaId
        }})
        return resposta        
    }



}

export default tarefaRepository