import Joi from "joi";
import { validarSchema } from "./ValidarSchema.js";

const usuarioPatchValid = Joi.object({  
    nome: Joi.string().min(3).messages({
        'string.base': "Nome precisa ser uma string",
        'string.empty': "Nome não pode está em branco",
        'string.min': "NOme deve ter no minimo {#limit} caracteres"    
    }),  
  
    genero: Joi.string().valid("M", "F").messages({
        'string.base': 'Genero deve ser uma string.',   
        'any.required': 'Genero é obrigatório.',
        'any.only': 'Genero deve ser M ou F',
    })   


})

export const validarUsuarioPatch = validarSchema(usuarioPatchValid)