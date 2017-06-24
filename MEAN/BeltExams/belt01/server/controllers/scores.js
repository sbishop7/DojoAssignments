const mongoose = require("mongoose");
const Score = mongoose.model("Score")

module.exports ={
    add: (req, res) => {
		console.log("Adding Score", req.body)
		if(req.body){
            let newScore = new Score(req.body)
            newScore.save()
                    .then(() => {
                        res.json(true)
                    })
                    .catch((err) => {
                        console.log("error while saving score")
                        res.status(500)
                    })
		} else {
			console.log("No score given")
			res.status(500).json("No score given")
		}
	},
    all_scores: (req, res) => {
        console.log("finding Scores from controller")
        Score.find({})
            .sort('-score')
            .then( data => res.json(data))
            .catch( err => res.status(500).json( err ))
    },
    search: (req, res) => {
        console.log("searching through scores")
        Score.find( {$or: [{username: req.body}, {score: req.body}, {percentage: req.body}]})
            .then( data => res.json(data))
            .catch( err => res.status(500).json(err))
    }

}