	const Student = require('../../user/User.js')


	const remove =(req,res) => {
		
		
	let myquery = { email : req.params.email};

	
	
	Student.findOneAndRemove(myquery,  function(err,result) {
    if (err) throw err;
    res.send('Student is removed');})

 
  };
	


module.exports = remove;

