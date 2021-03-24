const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
app.use(cors())
app.use(bodyParser.json());
const users= ["asad",'aporbo','ayesha','hridy','sakib','sabana']

app.get('/', (req,res)=>{
    res.send('thank you very much');
}
)

app.get('/fruits/banana', (req,res)=>{
    res.send({fruits:'banana',quantity:1000,price:1000});
}
)

app.get('/users/:id',(req,res)=>{
    const id = req.params.id
    const name = users[id];
    res.send({id,name});
})

app.post('/adduser', (req,res)=>{
    const user = req.body;
    user.id =55;
   res.send(user)
})



app.listen(3000, ()=>console.log('listening to port 3000'))