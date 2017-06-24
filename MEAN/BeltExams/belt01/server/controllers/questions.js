const mongoose = require("mongoose");
const Question = mongoose.model("Question")

module.exports ={
    add: (req, res) => {
		console.log("Adding Question", req.body)
		if(req.body.question){
			Question.findOne({question: req.body.question})
				.then(data => {
					if(data){
                        console.log("question already exists")
						res.json(true)
					} else {
						let new_question = new Question(req.body)
						new_question.save()
							.then(() => {
								res.json(true)
							})
							.catch((err) => {
								console.log("Question creation error", err)
								res.status(500).json(err)
							})
					}
				})
		} else {
			console.log("No question given")
			res.status(500).json("No name given")
		}
	},
	all_questions: (req, res) => {
        console.log("finding questions from controller")
        Question.find({})
            .then( data => res.json(data))
            .catch( err => res.status(500).json( err ))
	}
}
