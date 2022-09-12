const GamesSchame = require('../models/gamesSchame')

class GamesController {

    async addNewGame(req, res) {
        const newGame = new GamesSchame({
            name: req.body.name,
            src: req.body.src
        });
        try {
            const saved = await newGame.save();
            res.json(saved);
        } catch (error) {
            res.status(500).json("the game not saved");
        };
    };

    async getAllGames(req, res) {
        try {
            const games = await GamesSchame.find({});
            res.json(games);
        } catch (error) {
            res.status(500).json("not fined games conection err");
        };
    };
}

module.exports = new GamesController()