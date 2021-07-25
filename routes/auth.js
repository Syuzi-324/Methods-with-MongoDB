const express = require('express');
const {show, register, update, remove } = require('../controllers/auth')


const authRouter = express.Router();



authRouter.get('/people', show);

authRouter.post('/people', register);

authRouter.put('/people/:email', update);

authRouter.delete('/people/:email', remove);



module.exports = authRouter;

