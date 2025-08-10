import tarefa from "./TarefaModel.js";
import usuario from "./UsuarioModel.js";

usuario.hasMany(tarefa, {foreignKey: "usuarioId", as: "tarefas"})
tarefa.belongsTo(usuario, {foreignKey: "usuarioId", as: "usuario"})


export {usuario, tarefa}