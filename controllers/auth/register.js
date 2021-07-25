
	const Student = require('../../user/User');











	const register = (req,res) => {

		let student1 = new Student({
			name: req.body.name,
			email: req.body.email,
			age: req.body.age 
		})
	 student1.save(function (err) {
  if (err) {console.log(err);}})
	res.send('Successfully added');
}

module.exports = register;




// let p1=new People({ name: "Sunny School", year: "2012", address: "Tavush" })
// p1.save(function (err) {
//   if (err) {console.log(err);}
//  else{console.log('1 record inserted') } ;
// });