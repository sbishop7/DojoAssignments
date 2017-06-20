const rankings = require('./../controllers/rankings')

module.exports = (app) => {
    app.get('/', rankings.index)
    app.get('/rankings', rankings.rankings)
}