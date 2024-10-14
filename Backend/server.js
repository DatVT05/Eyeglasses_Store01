const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const orders = {
  "123456": {
    orderCode: "123456",
    status: "Đang vận chuyển",
    products: [
      { name: "Kính Râm Lily KC320", price: 180000, quantity: 1 },
    ],
    total: 210000,
    shippingFee: 30000,
  },
};

app.post('/api/order-track', (req, res) => {
  const { orderCode, email } = req.body;
const order = orders[orderCode];

  if (order) {
    return res.json(order);
  } else {
    return res.status(404).json({ error: 'Không tìm thấy đơn hàng' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
