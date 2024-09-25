const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute=require("./routes/stripe");
const nltextRoute=require("./routes/nltext");
const cors=require("cors");

dotenv.config();

console.log(process.env.MONGO_URL)
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>console.log("Connection Succesfull"))
.catch((err)=>console.log(err));

app.use(express.json());
app.use(cors());
app.use("/api/checkout", stripeRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/nltext", nltextRoute);

app.listen(process.env.PORT || 8000, () => {
    console.log("Running!");
  });