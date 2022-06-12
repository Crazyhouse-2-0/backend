require('dotenv').config();
import express from 'express';
import cors from 'cors';
import bp from 'body-parser';
import mongoose from 'mongoose';
import playerRoutes from './routes/playerRoutes';
import gameRoutes from './routes/gameRoutes';

const app = express();
const PORT = process.env.PORT;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//body-parser setup
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

//CORS Setup
app.use(cors())

playerRoutes(app)
gameRoutes(app)

app.get('/', (req, res) => {
    res.send(`Our application is running on port ${PORT}`)
})

app.listen(PORT, () =>{
    console.log(`Your server is running on port ${PORT}`)
})