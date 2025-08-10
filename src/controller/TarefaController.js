import tarefaService from "../service/TarefaService.js";
import RecursoNaoEncontradoError from "../utils/errors/RecursoNaoEncontradoError.js";
import ValidarErros from "../utils/errors/ValidarError.js";

const tarefaController = {

    async criarTarefa(req, res) {
        try{

            let {usuarioId} = req.params
            let corpo = req.body

            corpo.usuarioId = usuarioId

            const resposta = await tarefaService.criarTarefa(corpo)
            res.status(201).json(resposta)

        } catch (error) {
             if (error instanceof ValidarErros) {                
                return res.status(error.statusCode).json(error);
            }

             if (error instanceof RecursoNaoEncontradoError) {
                return res.status(error.statusCode).json(error);
            } 

            console.log(error)
            return res.status(500).json({error: "Erro ao criar Tarefa"})
        }
    },


    async listarTarefas(req, res) {

        try {
            const tarefas = await tarefaService.listarTarefas();
            return res.status(200).json(tarefas);

        } catch (error){
            console.error('Erro ao listar tarefas:', error);
            return res.status(500).json({ error: 'Erro ao listar tarefas' });
        }
    },

     async listarUmaTarefa(req, res) {

        try {
            const tarefa = await tarefaService.listarUmaTarefa(req.params.id);            
            return res.status(200).json(tarefa);

        } catch (error){
            if (error instanceof ValidarErros) {
                return res.status(error.statusCode).json(error);
            }  
            
            if (error instanceof RecursoNaoEncontradoError) {
                return res.status(error.statusCode).json(error);
            } 
        
            console.error('Erro ao listar uma tarefa:', error);
            return res.status(500).json({ error: 'erro ao listar uma tarefa' });
        
        }
    },

    async atualizarUmaTarefa(req, res){

        try {
            await tarefaService.atualizarUmaTarefa(req.params.id, req.body)
            res.status(204).send()
        } catch (error) {

             if (error instanceof ValidarErros) {
                return res.status(error.statusCode).json(error);
            }  
            
            if (error instanceof RecursoNaoEncontradoError) {
                return res.status(error.statusCode).json(error);
            } 

            console.error('Erro atualizar uma tarefa:', error);
            return res.status(500).json({ error: 'Erro ao atualizar tarefa' });
        }

    },

    async deletarTarefa(req, res) {
        try {
            await tarefaService.deletarTarefar(req.params.id)
            return res.status(204).send()

        } catch (error) {
             if (error instanceof ValidarErros) {
                return res.status(error.statusCode).json(error);
            } 
            
             if (error instanceof RecursoNaoEncontradoError) {
                return res.status(error.statusCode).json(error);
            } 

            console.error('Erro ao deletar uma tarefa:', error);
            return res.status(500).json({ error: 'Erro ao deletar uma tarefa' });
            
        }
    }

}

export default tarefaController