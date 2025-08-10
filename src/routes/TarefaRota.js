import express from "express"

import tarefaController from "../controller/TarefaController.js"
import { validarTarefa } from "../utils/validation/TarefaPostValid.js"
import { patchValidarTarefa } from "../utils/validation/TarefaPatchValid.js"

const router = express.Router()

router.post("/tarefa", validarTarefa ,tarefaController.criarTarefa)
router.get("/tarefa", tarefaController.listarTarefas)
router.get("/tarefa/:id", tarefaController.listarUmaTarefa)
router.patch("/tarefa/:id", patchValidarTarefa ,tarefaController.atualizarUmaTarefa)
router.delete("/tarefa/:id", tarefaController.deletarTarefa)

export default router