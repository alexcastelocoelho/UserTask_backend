import express from "express"

import indexRouter from "../src/routes/Index.js"
import { inicializar } from "./config/database/Index.js"

const app = express()

app.use(express.json())
app.use("/api/v1", indexRouter)

inicializar()


export default app