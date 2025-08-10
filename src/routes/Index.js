import express from "express"

import tarefaRota from "../routes/TarefaRota.js"
import usuarioRota from "../routes/UsuarioRota.js"

const router = express.Router()

router.use(tarefaRota)
router.use(usuarioRota)

export default router

