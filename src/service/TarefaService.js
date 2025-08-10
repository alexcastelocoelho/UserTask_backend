import tarefaRepository from "../repository/TarefaRepository.js";
import usuarioService from "./UsuarioService.js";
import RecursoNaoEncontradoError from "../utils/errors/RecursoNaoEncontradoError.js";
import ValidarErros from "../utils/errors/ValidarError.js";
import { uuidValidacao } from "../utils/Uuidvalidacao.js";

const tarefaService = {

    async criarTarefa(tarefaDto){
        if(tarefaDto.titulo.length < 3 ){
            throw new ValidarErros(`campo precisa ter 3 caracteres`)
        }

         await usuarioService.listarUmUsuario(tarefaDto.usuarioId)

        const novaTarefa = await tarefaRepository.create(tarefaDto)
        return novaTarefa
    },

    async listarTarefas() {       
        const tarefas = await tarefaRepository.findAll()            
        return tarefas
    },

    async listarUmaTarefa(id) {        
        if(!uuidValidacao(id)){
            throw new ValidarErros("formato do id invalido ou longo demais")        
        }        
        
        const tarefa = await tarefaRepository.findByPk(id)
        if(!tarefa) {
            throw new RecursoNaoEncontradoError("tarefa não localizada")
        }
        return tarefa
    },

    async atualizarUmaTarefa(tarefaId, tarefaDtoAtualizar) {
        await this.listarUmaTarefa(tarefaId)
        
        await tarefaRepository.update(tarefaId, tarefaDtoAtualizar)
    },

    async deletarTarefar(id) {
         if(!uuidValidacao(id)){
            throw new ValidarErros("formato do id invalido ou longo demais")                }        
        

         const tarefa  = await tarefaRepository.destroy(id)
        if(!tarefa) {
            throw new RecursoNaoEncontradoError("tarefa não localizada para deletar")
        }        

    }



}

export default tarefaService