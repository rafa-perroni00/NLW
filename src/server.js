//Server
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

const nunjucks = require('nunjucks')

nunjucks.configure('src/view',{
    express: server,
    noCache: true,
})

server
//Configuracao dos arquivos do front
.use(express.urlencoded({extended: true}))
.use(express.static("public"))
//Rotas
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)