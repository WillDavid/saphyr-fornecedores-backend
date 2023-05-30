import express from 'express'
import cors from 'cors'
import routes from './src/routes.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/', routes)


app.listen(3500, () => {
    console.log(`App Rodando na porta ${3500}`)
})