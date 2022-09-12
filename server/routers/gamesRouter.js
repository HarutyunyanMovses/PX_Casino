// libs
const { Router } = require("express");
// middleware
const authMiddleware = require("../middleware/authMiddleware");
// controler
const gamesControler = require("../controllers/gamesControler");

const router = new Router();

router.post("/add_game" , gamesControler.addNewGame)   /////  middlewarner chmoranaq
router.get("/all_games" , gamesControler.getAllGames)


module.exports = router