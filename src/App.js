 import "../src/model/Index.js"
import express from "express"
import cors from "cors"

import indexRouter from "../src/routes/Index.js"
import { inicializar } from "./config/database/Index.js"
import errorHandler from "./utils/errors/ErrorHandler.js"

const app = express()
app.use(cors())

app.use(express.json())
app.use("/api/v1", indexRouter)
app.use(errorHandler)

inicializar()


export default app