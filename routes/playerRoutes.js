import {
    addNewPlayer, 
    deletePlayerByEmail, 
    getAllPlayers,
    getPlayerByEmail,
    getPlayerById,
    getPlayerByUsername,
    updatePlayerByEmail
    } from '../controllers/playerController';

const playerRoutes = (app) => {
    // player routes
    app.route('/players')

    //POST endpoint, add a new player
        .post(addNewPlayer)
    //GET endpoint, get all players
        .get(getAllPlayers)

    app.route('/player/:PlayerEmail')
    //POST endpoint, get a player by email
        .get(getPlayerByEmail)
        .put(updatePlayerByEmail)
        .delete(deletePlayerByEmail)

    app.route('/login/:PlayerUsername')
        .get(getPlayerByUsername)

    app.route('/player/id/:PlayerId') // cannot have /player/:PlayerId as it would conflict with route above
        .get(getPlayerById)
}
export default playerRoutes;