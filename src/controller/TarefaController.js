import tarefaService from "../service/TarefaService.js";
import RecursoNaoEncontradoError from "../utils/errors/RecursoNaoEncontradoError.js";
import ValidarErros from "../utils/errors/ValidarError.js";

const tarefaController = {

    async criarTarefa(req, res, next) {
        try{

            let {usuarioId} = req.params
            let corpo = req.body

            corpo.usuarioId = usuarioId

            const resposta = await tarefaService.criarTarefa(corpo)
            res.status(201).json(resposta)

        } catch (error) {
            next(error); 
           
        }
    },


    async listarTarefas(req, res, next) {

        try {
            const tarefas = await tarefaService.listarTarefas();
            return res.status(200).json(tarefas);

        } catch (error){
            next(error); 
        }
    },

     async listarUmaTarefa(req, res, next) {

        try {
            const tarefa = await tarefaService.listarUmaTarefa(req.params.id);            
            return res.status(200).json(tarefa);

        } catch (error){
           next(error);         
        }
    },

    async atualizarUmaTarefa(req, res, next){

        try {
            await tarefaService.atualizarUmaTarefa(req.params.id, req.body)
            res.status(204).send()
        } catch (error) {
            next(error);            
        }

    },

    async deletarTarefa(req, res, next) {
        try {
            await tarefaService.deletarTarefar(req.params.id)
            return res.status(204).send()

        } catch (error) {
            next(error); 
         
        }
    }

}

export default tarefaController