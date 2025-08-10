export default class ValidarErros extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidarErros";
        this.statusCode = 400;  
        this.messagemDeErro = message;           
    }
}


