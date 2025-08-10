import express from "express"

import usuarioController from "../controller/UsuarioController.js"
import { validarUsuarioPost } from "../utils/validation/UsuarioPostValid.js"
import { validarUsuarioPatch } from "../utils/validation/UsuarioPatchValid.js"


const router = express.Router()

router.post("/usuario", validarUsuarioPost ,usuarioController.criarUsuario)
router.get("/usuario", usuarioController.listarUsuarios)
router.get("/usuario/:id", usuarioController.listarUmUsuario)
router.patch("/usuario/:id", validarUsuarioPatch ,usuarioController.atualizarUmUsuario)
router.delete("/usuario/:id", usuarioController.deletarUsuario)

export default router