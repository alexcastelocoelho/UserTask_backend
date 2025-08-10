import {Sequelize} from "sequelize"
import dotenv from "dotenv"
dotenv.config()

export const conexaoBanco = new Sequelize(process.env.BANCO, process.env.USUARIO, process.env.SENHA, {
  host: 'localhost',
  dialect: 'postgres'
});

const testarConexao  = async () =>  {
  try {
    await conexaoBanco.authenticate();
    console.log('Conectado com sucesso ao banco');
  } catch (error) {
    console.error('Erro na conexão com banco:', error);
  }
}

export async function inicializar() {
  await testarConexao();
    
  await conexaoBanco.sync({ alter: true }); 
  console.log("Tabelas sincronizadas");
}



