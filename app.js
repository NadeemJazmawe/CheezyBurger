const express = require('express'),
app = express(),
port = process.env.PORT || 3000;

app.use(express.static("client/build"));
app.use(express.json());

app.use('/', (req, res)=>{
    res.sendFile(__dirname + '/client/build/index.html');
});


app.listen(port, (error)=>{
    if(!error){
        console.log('Listening on port ', port);
    }else{
        console.log(error);
    }
})