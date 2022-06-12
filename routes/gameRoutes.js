import {
    addNewGame, 
    getGameById,
    updateGame
} from '../controllers/gameController';

const gameRoutes = (app) => {

    //game routes
    app.route('/games')
        .post(addNewGame)

    app.route('/game/:GameId')
        .get(getGameById)
        .put(updateGame)
}

export default gameRoutes;