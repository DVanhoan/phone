import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import connectdb from "./db/mongodb.js"

import auth_routes from "./routes/authRoute.js"

dotenv.config()

const app = express()
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use("/auth", auth_routes);

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
    connectdb();
});