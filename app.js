const express = require ('express');

const authRouter = require('./routes/auth');

const app = express();

console.log(__dirname)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);



app.listen(3000);