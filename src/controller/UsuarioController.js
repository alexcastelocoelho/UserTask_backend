import usuarioService from "../service/UsuarioService.js";
import RecursoNaoEncontradoError from "../utils/errors/RecursoNaoEncontradoError.js";
import ValidarErros from "../utils/errors/ValidarError.js";

const usuarioController = {

    async criarUsuario(req, res) {
        try{

            let corpo = req.body

            const resposta = await usuarioService.criarUsuario(corpo)
            res.status(201).json(resposta)

        } catch (error) {
             if (error instanceof ValidarErros) {                
                return res.status(error.statusCode).json(error);
            }
            console.log(error)
            return res.status(500).json({error: "Erro ao criar usuario"})
        }
    },


    async listarUsuarios(req, res) {

        try {
            const usuarios = await usuarioService.listarUsuarios();
            return res.status(200).json(usuarios);

        } catch (error){
            console.error('Erro ao listar usuarios:', error);
            return res.status(500).json({ error: 'Erro ao listar usuários' });
        }
    },

     async listarUmUsuario(req, res) {

        try {
            const usuario = await usuarioService.listarUmUsuario(req.params.id);            
            return res.status(200).json(usuario);

        } catch (error){
            if (error instanceof ValidarErros) {
                return res.status(error.statusCode).json(error);
            }  
            
            if (error instanceof RecursoNaoEncontradoError) {
                return res.status(error.statusCode).json(error);
            } 
        
            console.error('Erro ao listar um usuario:', error);
            return res.status(500).json({ error: 'erro ao listar um usuario' });
        
        }
    },

    async listarTarefasDeUsuario(req, res) {
        try {
            const usuario = await usuarioService.listarTarefasDeUsuario(req.params.id);            
            return res.status(200).json(usuario);

        } catch (error){
            if (error instanceof ValidarErros) {
                return res.status(error.statusCode).json(error);
            }  
            
            if (error instanceof RecursoNaoEncontradoError) {
                return res.status(error.statusCode).json(error);
            } 
        
            console.error('Erro ao listar tarefas de um usuario:', error);
            return res.status(500).json({ error: 'erro ao listar tarefas de um usuario' });
        
        }
    }
    
    
    ,

    async atualizarUmUsuario(req, res){

        try {
            await usuarioService.atualizarUsuario(req.params.id, req.body)
            res.status(204).send()
        } catch (error) {

             if (error instanceof ValidarErros) {
                return res.status(error.statusCode).json(error);
            }  
            
            if (error instanceof RecursoNaoEncontradoError) {
                return res.status(error.statusCode).json(error);
            } 

            console.error('Erro atualizar um usuario:', error);
            return res.status(500).json({ error: 'Erro ao atualizar um usuario' });
        }

    },

    async deletarUsuario(req, res) {
        try {
            await usuarioService.deletarUsuario(req.params.id)
            return res.status(204).send()

        } catch (error) {
             if (error instanceof ValidarErros) {
                return res.status(error.statusCode).json(error);
            } 
            
             if (error instanceof RecursoNaoEncontradoError) {
                return res.status(error.statusCode).json(error);
            } 

            console.error('Erro ao deletar um usuario:', error);
            return res.status(500).json({ error: 'Erro ao deletar um usuario' });
            
        }
    }

}

export default usuarioController