	const Student = require('../../user/User.js')


	const update =async (req,res) => {
		
		console.log(req.params.email)
	let myquery = { email : req.params.email};
	console.log(myquery)
	let newvalues = {  name: req.body.name, age: req.body.age };
	await Student.findOneAndUpdate(myquery, newvalues, function(err,result) {
    if (err) throw err;
    res.send(result);})

    res.send('Student info is updated')
 
  };
	


module.exports = update;

