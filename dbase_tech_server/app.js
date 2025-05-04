const express =require('express');

const app = express()

// Start the server
//localhost >> 192.168.0.1
const hostname ='0.0.0.0';
const port=3000;
app.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}`);
});

