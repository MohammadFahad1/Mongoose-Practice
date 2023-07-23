const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 5000

// DB Connection
async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log("DB Connected 👌");
    } catch (err) {
        console.log(`Failed to connect with databse:`, err);
    }
}
bootstrap();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})