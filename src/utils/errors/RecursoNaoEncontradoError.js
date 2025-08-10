export default class RecursoNaoEncontradoError extends Error {
    constructor(message) {
        super(message);
        this.name = "RecursoNaoEncontrado";
        this.statusCode = 404;  
        this.messagemDeErro = message;           
    }
}


