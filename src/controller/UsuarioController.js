import usuarioService from "../service/UsuarioService.js";
import RecursoNaoEncontradoError from "../utils/errors/RecursoNaoEncontradoError.js";
import ValidarErros from "../utils/errors/ValidarError.js";

const usuarioController = {

    async criarUsuario(req, res, next) {
        try{

            let corpo = req.body

            const resposta = await usuarioService.criarUsuario(corpo)
            res.status(201).json(resposta)

        } catch (error) {
            next(error); 
           
        }
    },


    async listarUsuarios(req, res, next) {

        try {
            const usuarios = await usuarioService.listarUsuarios();
            return res.status(200).json(usuarios);

        } catch (error){
            next(error); 
        }
    },

     async listarUmUsuario(req, res, next) {

        try {
            const usuario = await usuarioService.listarUmUsuario(req.params.id);            
            return res.status(200).json(usuario);

        } catch (error){
            next(error); 
        
        }
    },

    async listarTarefasDeUsuario(req, res, next) {
        try {
            const usuario = await usuarioService.listarTarefasDeUsuario(req.params.id);            
            return res.status(200).json(usuario);

        } catch (error){
            next(error); 
        }
    }
    
    
    ,

    async atualizarUmUsuario(req, res, next){

        try {
            await usuarioService.atualizarUsuario(req.params.id, req.body)
            res.status(204).send()
        } catch (error) {
             next(error); 
        }

    },

    async deletarUsuario(req, res, next) {
        try {
            await usuarioService.deletarUsuario(req.params.id)
            return res.status(204).send()

        } catch (error) {
            next(error); 
            
        }
    }

}

export default usuarioController