import express from "express"

import usuarioController from "../controller/UsuarioController.js"
import { validarUsuarioPost } from "../utils/validation/UsuarioPostValid.js"
import { validarUsuarioPatch } from "../utils/validation/UsuarioPatchValid.js"


const router = express.Router()

router.post("/usuarios", validarUsuarioPost ,usuarioController.criarUsuario)
router.get("/usuarios", usuarioController.listarUsuarios)
router.get("/usuarios/:id", usuarioController.listarUmUsuario)
router.get("/usuarios/:id/tarefas", usuarioController.listarTarefasDeUsuario)
router.patch("/usuarios/:id", validarUsuarioPatch ,usuarioController.atualizarUmUsuario)
router.delete("/usuarios/:id", usuarioController.deletarUsuario)

export default router