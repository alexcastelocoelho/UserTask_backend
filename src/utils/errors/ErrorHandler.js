import ValidarErros from "./ValidarError.js";
import RecursoNaoEncontradoError from "./RecursoNaoEncontradoError.js";

const errorHandler =  (error, req, res, next) => {

    console.error(error)

    if (error instanceof ValidarErros) {   
        return res.status(error.statusCode).json(error);
    }     


    if (error instanceof RecursoNaoEncontradoError) {
        return res.status(error.statusCode).json(error);
    }  

    return res.status(500).json({error: 'Erro no servidor'});


}

export default errorHandler

