
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // ✅ Correct variable name for CORS
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');



const app = express();
const env = process.env;

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors());



app.get('/', (req, res) => {
  return res.status(404).send('Sorry, can\'t find that');

});

app.get('/watch/videos/:id', (request, response) => {
  return response.json({ videoId: request.params.id });
});




// Start the server
//localhost >> 192.168.0.1
const hostname = env.HOST;
const port = env.PORT;


mongoose.connect(env.MONGODB_CONNECTION_STRING).then(() => {
  console.log('Connetcted to Database');
}).catch((error) => {
  console.error(error);

});

app.listen(port, hostname, () => {
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






/*

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config(); // ✅ Proper way to load env

const app = express();
const env = process.env;

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
  return res.status(404).send("Sorry, can't find that");
});

app.get('/watch/videos/:id', (req, res) => {
  return res.json({ videoId: req.params.id });
});

const hostname = env.HOST || '0.0.0.0';
const port = env.PORT || 3000;
const mongoUri = env.MONGODB_CONNECTION_STRING;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to Database');
})
.catch((err) => {
  console.error('❌ DB Connection Error:', err);
});

app.listen(port, hostname, () => {
  console.log(`🚀 Server running at http://${hostname}:${port}`);
});

*/