
const express =require('express');
require('dotenv/config');

const app = express();
const env= process.env;

app.get('/',(req,res)=>{
  return res.send('<h1>WELCOME TO SARITA CITY </h1>')
});

app.get('/watch/videos/:id',(request,response)=>{

    return response.json({'videoId': request.params.id})


});

// Start the server
//localhost >> 192.168.0.1
const hostname =env.HOST;
const port=env.PORT;


app.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}`);
});

// C R U D
//CREATE DATA
//app.post('/register')
//READ THE DATA
//app.get('/')
//UPDATE THE DATA
//app.put()
//DELETE THE DATA
//app.delete()

//http.post('/file')


