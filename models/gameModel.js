import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const GameSchema = new Schema({
    white: {
        type:String, //username
        default: ""
    },
    black: {
        type:String, 
        default: ""
    },
    result:{
        type:String, //"W/D/B" for "White Win/Draw/Black Win"
        default:"",
    },
    wmoves: {
        type: Array,
        of: String,
        default: []
    },
    bmoves: {
        type: Array,
        of: String,
        default: []
    },
    fen:{
        type:String,
        default:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
    },
    date_created:{
        type: Date,
        default:Date.now
    }
})