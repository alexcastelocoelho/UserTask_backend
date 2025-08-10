import tarefa from "../model/TarefaModel.js";
import usuarioModel from "../model/UsuarioModel.js";


const usuarioRepository = {

    async create(usuarioDto){
        const resposta = await usuarioModel.create(usuarioDto)
        return resposta

    },
    

     async findAll() {
        const resposta = await usuarioModel.findAll()
        return resposta
    },

    
    async findByPk(id) {
        const resposta = await usuarioModel.findByPk(id)
        return resposta

    },

    async update(usuarioId, usuarioDtoAtualizar ) {
         await usuarioModel.update(usuarioDtoAtualizar, {
            where:{id: usuarioId}
        })        
    },

    async destroy(usuarioId){
        const resposta = await usuarioModel.destroy({where:{
            id: usuarioId
        }})
        return resposta        
    }




}

export default usuarioRepository