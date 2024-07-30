import express from "express";
import dotenv from "dotenv";
// import {app} from "./app.js"
import Razorpay from "razorpay";
import cors from "cors";

import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRoutes);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server is working on ${process.env.PORT}`);
});
