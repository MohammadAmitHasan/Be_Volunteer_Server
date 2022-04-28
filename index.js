const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Be_Volunteer')
})

app.listen(port, () => {
    console.log(`Be_Volunteer Server is up and running in port ${port}`)
})