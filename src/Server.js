import app from "./App.js";

const porta = process.env.PORTA || 3500

app.listen(porta, () => {
    console.log(`Servidor ativo na porta ${porta}`)
})