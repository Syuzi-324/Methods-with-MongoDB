const Student = require('../../user/User.js')


	
	 const show = (req,res) =>{
	Student.find({},function(err, result) {  
    if (err) throw err;  
    res.send(result);  
      
  }) ;
	

}

// 	 register = async (req,res) => {
// 	await this.students.push({
// 		name: req.body.name,
// 		email: req.body.email,
// 		age: req.body.age
// 	})
// 	res.send('Successfully added');
// }


// }




module.exports = show;