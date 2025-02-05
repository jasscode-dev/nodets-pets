import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/index'




dotenv.config();

const server = express();

server.set('views',path.join(__dirname,'views'));
server.set('view engine','mustache');
server.engine('mustache',mustache());

server.use(express.static(path.join(__dirname,'../public')))
server.use(mainRoutes)
server.use((req,res)=>{
    res.render('pages/404')
})








server.listen(process.env.PORT);