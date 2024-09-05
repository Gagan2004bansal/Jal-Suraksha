const express = require('express');
const app = express();
require('dotenv').config();
require('./Config/Db');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRoutes = require('./Routes/AuthRoutes');
const Routes  = require('./Routes/Routes');

const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1', AuthRoutes);
app.use('/api/v1', Routes);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})