const express = require("express");
const app = express();

const PORT = process.env.PORT || 8090;

app.get('/',(req,res)=>{
    res.send('Hello from Second App');
});

app.get('/hello',(req,res)=>{
    res.send({
        msg: 'Message from /hello',
        status: 'Good'
    });
});
app.listen(PORT,()=>{
    console.log('Express server is up');
});