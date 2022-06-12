import mongoose from "mongoose";
import { GameSchema } from "./gameModel";

const Schema = mongoose.Schema;

export const PlayerSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type:String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    rating:{
        type:Number,
        default:1200,
    },
    numGames:{
        type:Number,
        default:0,
    },
    numWins:{
        type:Number,
        default:0,
    },
    numDraws:{
        type:Number,
        default:0,
    },
    numLosses:{
        type:Number,
        default:0,
    },
    allGames: {
        type: Map,
        of: new Schema,
        default: {}
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});