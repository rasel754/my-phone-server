const express = require('express');
const cors= require('cors');
const app = express();
const port =5000;
const phones =require('./phones.json');

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World.....my phone information coming soon moon phone information coming soon');

})

app.get('/phones', (req, res) => {
    res.send(phones);

})

app.get('/phones/:id', (req, res) => {
    const id =parseInt( req.params.id);
    console.log('this is id no:',id);
    const phone =phones.find(phone => phone.id === id || {});
    console.log(phone);
    res.send(phone);
 

})

app.listen(port , () => {
    console.log(`my phone server is running at ${port} port`);
    });