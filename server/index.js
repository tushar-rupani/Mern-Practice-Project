import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import postRouter from './routes/posts.js'

const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())
app.use("/posts", postRouter)
const CONNECTION = "mongodb+srv://tushar:tushar2408@cluster0.g9fes7b.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log("App running on Port " + PORT + "successfully")))
.catch((err) => console.log(err.message));

// mongoose.set('strictQuery', false);
