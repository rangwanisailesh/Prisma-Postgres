const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());

const User = require('./src/route');

app.use('/user', User);

app.get('/', (req, res) => {
    res.send('Prisma');
});

app.listen(5000, () => console.log('Server running'));