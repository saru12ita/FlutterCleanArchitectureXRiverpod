
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // ✅ Correct variable name for CORS
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');



const app = express();
const env = process.env;
const API =env.API_URL;

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors());

const authRouter = require('./routes/auth');
app.use(`${API}/`, authRouter);




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

