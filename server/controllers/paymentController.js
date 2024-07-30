import { instance } from "../server.js";
const checkout = async (req, res) => {
  var options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    order,
  });
};

const paymentVerification = async (req, res) => {
  console.log(req.body);
  res.status(200).json({
    success: true,
  });
};

export { checkout, paymentVerification };
