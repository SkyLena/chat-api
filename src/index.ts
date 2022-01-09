import express from "express";
import dotenv from "dotenv";
import {authRouter} from "./auth";
import {userRouter} from "./users";
import {ROUTES, databaseConnect} from "./config";

dotenv.config();

const PORT = process.env.LISTEN_PORT ? +process.env.LISTEN_PORT : 5000;

const server = express();

server.use(ROUTES.Auth.main, authRouter);
server.use(ROUTES.Users.main, userRouter);

server.listen(PORT,async () => {
    console.log("Server listen port:", PORT);

    await databaseConnect();
})