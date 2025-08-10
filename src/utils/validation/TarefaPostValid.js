import Joi from "joi";
import { validarSchema } from "./ValidarSchema.js";


const TarefaPostValid = Joi.object({

    titulo: Joi.string().min(3).required().messages({
        'string.base': "campo titulo precisa se uma string",
        'string.empty': "titulo não pode está em branco",
        'string.min': "titulo deve ter no minimo {#limit} caracteres"    
    }),
    descricao: Joi.string().min(6).required().messages({
        'string.base': "campo descricao precisa se uma string",
        'string.empty': "descricao não pode está em branco",
        'string.min': "titulo deve ter no minimo {#limit} caracteres"    
    })
    ,
    status: Joi.string().valid("PENDENTE", "CANCELADA", "ATRASADA", "CONCLUIDA").required().messages({
        'string.base': 'O campo STATUS deve ser uma string.',   
        'any.required': 'O campo "status" é obrigatório.',
        'any.only': 'O status deve ser um dos seguintes: PENDENTE, CANCELADA, ATRASADA ou CONCLUIDA.',
        
    })
//     ,
//     usuarioId: Joi.string().guid({ version: ['uuidv4'] }).required().messages({
//   'any.required': 'Campo obrigatório',
//   'string.empty': 'Não pode estar vazio'
// })


})

export const validarTarefa = validarSchema(TarefaPostValid)