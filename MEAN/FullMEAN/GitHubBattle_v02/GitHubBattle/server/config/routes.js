const path = require("path")
const players = require("./../controllers/players.js")

module.exports = (app) => {
		app.post("/add", players.create)
		app.get("/players", players.all_players)
    app.get("*", (req, res) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	})
}