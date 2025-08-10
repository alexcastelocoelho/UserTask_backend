import express from "express"

import tarefaController from "../controller/TarefaController.js"
import { validarTarefa } from "../utils/validation/TarefaPostValid.js"
import { patchValidarTarefa } from "../utils/validation/TarefaPatchValid.js"

const router = express.Router()

router.post("/usuarios/:usuarioId/tarefas", validarTarefa ,tarefaController.criarTarefa)
router.get("/tarefas", tarefaController.listarTarefas)
router.get("/tarefas/:id", tarefaController.listarUmaTarefa)
router.patch("/tarefas/:id", patchValidarTarefa ,tarefaController.atualizarUmaTarefa)
router.delete("/tarefas/:id", tarefaController.deletarTarefa)

export default router