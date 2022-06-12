import mongoose from "mongoose";
import {PlayerSchema} from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body);

    newPlayer.save((err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    })
}

export const getAllPlayers = (req, res) => {
    Player.find({}, (err, Player) => {
        if(err){ 
            res.send(err);
        }
        res.json(Player);
    })
}

export const getPlayerByEmail = (req, res) => {
    Player.findOne( {email: req.params.PlayerEmail}, (err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    })
}

export const updatePlayerByEmail = (req, res) => {
    Player.findOneAndUpdate({email: req.params.PlayerEmail}, req.body, {new: true}, (err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });
};

export const deletePlayerByEmail = (req, res) => {
    let wr = Player.findOneAndRemove( {email: req.params.PlayerEmail}, (err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json( {message: `Deleted Player with email ${req.params.PlayerEmail}`} );
    })
    console.log(wr.nRemoved);
}

export const getPlayerByUsername = (req, res) => {
    Player.findOne( {username: req.params.PlayerUsername}, (err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    })
}
export const getPlayerById = (req, res) => {
    Player.findById(req.params.PlayerId, (err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    })
}
