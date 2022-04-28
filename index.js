const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// Connect MongoDB
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qizpe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const eventCollection = client.db('be_volunteer').collection('events');

        app.get('/events', async (req, res) => {
            const query = {};
            const cursor = eventCollection.find({});
            const events = await cursor.toArray();
            res.send(events);
        })

    }
    finally { };
}
run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('Welcome to Be_Volunteer')
})

app.listen(port, () => {
    console.log(`Be_Volunteer Server is up and running in port ${port}`)
})