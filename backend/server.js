
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;


const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace'];

app.use(cors());


app.get('/api/random-name', (req, res) => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    res.json({ name: randomName });
});

app.listen(PORT, () => {
    console.log(`Listening to port : ${PORT}`);
});
