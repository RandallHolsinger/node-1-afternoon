const express = require('express')
const ctrl = require('./contollers/messages_controller')


const app = express();

app.use(express.json());

app.get(`/api/messages`, ctrl.read); //read

app.post(`/api/messages`, ctrl.create) //create

app.put(`/api/messages/:id`, ctrl.update) //update

app.delete(`/api/messages/:id`, ctrl.delete) //delete


const PORT = 4000;
app.listen(4000, ()=>console.log(`Houston we have lift off on Port: ${PORT}`))