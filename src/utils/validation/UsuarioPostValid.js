import Joi from "joi";
import { validarSchema } from "./ValidarSchema.js";

const usuarioPostValid = Joi.object({
 
    nome: Joi.string().min(3).required().messages({
        'string.base': "Nome precisa ser uma string",
        'string.empty': "Nome não pode está em branco",
        'string.min': "NOme deve ter no minimo {#limit} caracteres"    
    }),

    dataNascimento: Joi.date().iso().required(),

    cpf: Joi.string().min(11).max(11).required().messages({

        'string.base': "Cpf precisa ser uma string",
        'string.empty': "Cpf não pode está em branco",
        'string.min': "Cpf deve ter {#limit} caracteres"    
    }),

    genero: Joi.string().valid("M", "F").required().messages({
        'string.base': 'Genero deve ser uma string.',   
        'any.required': 'Genero é obrigatório.',
        'any.only': 'Genero deve ser M ou F',
    })   


})

export const validarUsuarioPost = validarSchema(usuarioPostValid)