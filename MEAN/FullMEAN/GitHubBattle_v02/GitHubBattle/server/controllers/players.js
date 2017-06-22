const mongoose = require("mongoose");
const Player = mongoose.model("Player")

module.exports ={
    create: ( req, res ) => {
        let player = new Player( req.body );
        Player.findOneAndUpdate({username: player.username}, {score: player.score}, {avatar_url: player.avatar_url}, (err, doc) => {
            console.log(doc)
            if(doc){
                console.log("User already in database.  Updated")
                res.json(true)
            }else{
                player.save().catch( err => res.status( 500 ).json( err ) ).then( () => res.json( true ) );
            }
        })
    },
    all_players: ( req, res ) => {
        Player.find({})
            .sort( '-score' )
            .catch( err => res.status( 500 ).json( err ) )
            .then( data => res.json( data ) );
    },
    // one_player: ( req, res ) => {
    //     Player.findOne({ username: req.params.pk }, {$set: req.body})
    //         .catch( err => res.status( 500 ).json( err ) )
    //         .then( () => res.json( true ) );
    // },
    // update: ( req, res ) => {
    //     Player.updateOne({ username: req.params.pk }, {$set: req.body})
    //         .catch( err => res.status( 500 ).json( err ) )
    //         .then( () => res.json( true ) );
    // }
}