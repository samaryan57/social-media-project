import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "node:path";
import cors from "cors";
import apiRouter from "./routes/api.js";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/", apiRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000");
});