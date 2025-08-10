import Joi from "joi";
import { validarSchema } from "./ValidarSchema.js";

const TarefaPatchValid = Joi.object({

    titulo: Joi.string().min(3).messages({
        'string.base': "campo titulo precisa se uma string",
        'string.empty': "titulo não pode está em branco",
        'string.min': "titulo deve ter no minimo {#limit} caracteres"    
    }),
    descricao: Joi.string().min(6).messages({
        'string.base': "campo descricao precisa se uma string",
        'string.empty': "descricao não pode está em branco",
        'string.min': "titulo deve ter no minimo {#limit} caracteres"    
    }),
    status: Joi.string().valid("PENDENTE", "CANCELADA", "ATRASADA", "CONCLUIDA").messages({
            'string.base': 'O campo STATUS deve ser uma string.',   
            'any.required': 'O campo "status" é obrigatório.',
            'any.only': 'O status deve ser um dos seguintes: PENDENTE, CANCELADA, ATRASADA ou CONCLUIDA.',
            
        })

})

export const patchValidarTarefa = validarSchema(TarefaPatchValid)