import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import connectdb from "./db/mongodb.js"

import auth_route from "./routes/auth.js"
import category_route from "./routes/category.js"
import product_route from "./routes/product.js"
import cart_route from "./routes/cart.js"
import order_route from "./routes/order.js"
import review_route from "./routes/review.js"

dotenv.config()

const app = express()
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use("/auth", auth_route);
app.use("/category", category_route)
app.use("/product", product_route)
app.use("/cart", cart_route)
app.use("/order", order_route)
app.use("/review", review_route)


app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
    connectdb();
});