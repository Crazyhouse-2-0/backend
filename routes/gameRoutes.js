import {
    addNewGame, 
    getAllGames, 
    getGameById,
    updateGame
} from '../controllers/gameController';

const gameRoutes = (app) => {

    //game routes
    app.route('/games')
        .get(getAllGames)
        .post(addNewGame)

    app.route('/game/:GameId')
        .get(getGameById)
        .put(updateGame)
}

export default gameRoutes;