const express = require('express')
const app = express()
const PORT = 8000;
const controller = require('./controller/index')
const db = require('./models');

app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/todos', controller.get_todo);
app.post('/todo', controller.post_todo);
app.patch('/todo/:todoId', controller.patch_todo);
app.delete('/todo/:todoId', controller.delete_todo);

db.sequelize.sync({force:false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`http://localhost:${PORT}`)
    })
})

