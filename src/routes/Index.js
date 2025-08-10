import express from "express"

import tarefaRota from "../routes/TarefaRota.js"

const router = express.Router()

router.use(tarefaRota)

export default router

