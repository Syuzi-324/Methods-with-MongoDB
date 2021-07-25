const mongoose = require('mongoose')
const {mongodb}=require('./config')
var url = mongodb.link
mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', ()=>{
	console.log('Connected')
});

module.exports = mongoose

