import usuarioRepository from "../repository/UsuarioRepository.js";
import RecursoNaoEncontradoError from "../utils/errors/RecursoNaoEncontradoError.js";
import ValidarErros from "../utils/errors/ValidarError.js";
import { uuidValidacao } from "../utils/Uuidvalidacao.js";

const usuarioService = {

    async criarUsuario(usuarioDto){
       
        const novoUsuario = await usuarioRepository.create(usuarioDto)
        return novoUsuario
    },

    async listarUsuarios() {       
        const usuarios = await usuarioRepository.findAll()            
        return usuarios
    },

    async listarUmUsuario(id) {        
        if(!uuidValidacao(id)){
            throw new ValidarErros("formato do id invalido ou longo demais")        
        }        
        
        const usuario = await usuarioRepository.findByPk(id)
        if(!usuario) {
            throw new RecursoNaoEncontradoError("Usuario não localizado")
        }
        return usuario
    },


    async listarTarefasDeUsuario(id) {        
        if(!uuidValidacao(id)){
            throw new ValidarErros("formato do id invalido ou longo demais")        
        }        
        
        const usuario = await usuarioRepository.findByPkWithTarefas(id)
        if(!usuario) {
            throw new RecursoNaoEncontradoError("Usuario não localizado")
        }
        return usuario
    },


    async atualizarUsuario(UsuarioId, usuarioDtoAtualizar) {
        await this.listarUmUsuario(UsuarioId)
        
        await usuarioRepository.update(UsuarioId, usuarioDtoAtualizar)
    },

    async deletarUsuario(id) {
         if(!uuidValidacao(id)){
            throw new ValidarErros("formato do id invalido ou longo demais")                }        
        

         const usuario  = await usuarioRepository.destroy(id)
        if(!usuario) {
            throw new RecursoNaoEncontradoError("Usuario não localizado para deletar")
        }        

    }



}

export default usuarioService