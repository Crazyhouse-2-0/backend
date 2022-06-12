import mongoose from "mongoose";
import { GameSchema } from "../models/gameModel";

const Game = mongoose.model('Game', GameSchema);

export const getAllGames = (req, res) => {
    Game.find({}, (err, Game) => {
        if (err){
            res.send(err)
        }
        res.json(Game)
    })
}

export const addNewGame = (req, res) => {
    let newGame = new Game(req.body);

    newGame.save((err, Game) => {
        if (err) {
            res.send(err);
        }
        res.json(Game);
    })
}

export const getGameById = (req, res) => {
    Game.findById(req.params.GameId, (err, Game) => {
        if (err) {
            res.send(err);
        }
        res.json(Game);
    })
}

export const updateGame = (req, res) => {
    Game.findOneAndUpdate({_id: req.params.GameId}, req.body, {new: true}, (err, Game) => {
        if (err) {
            res.send(err)
        }
        res.json(Game)
    })
}