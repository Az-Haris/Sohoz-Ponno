require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const nodemailer = require('nodemailer'); // for sending email
const axios = require('axios');
const crypto = require('crypto'); // For hashing user dat

const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors({
  origin: ['https://sohoz-ponno.netlify.app', 'http://localhost:5173', 'https://sohozponno.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());



// Conversion API
const sendFacebookEvent = async (order) => {
  const accessToken = process.env.FB_ACCESS_TOKEN;
  const pixelId = process.env.FB_PIXEL_ID;

  const url = `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`;

  const hash = (value) =>
    value ? crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex') : null;

  const eventTime = Math.floor(Date.now() / 1000);

  const payload = {
    data: [
      {
        event_name: "Purchase",
        event_time: eventTime,
        action_source: "website",
        user_data: {
          ph: [hash(order.customerPhone)],
          client_user_agent: order.userAgent || "",
          client_ip_address: order.ip || "", // You'll extract it from request
        },
        custom_data: {
          currency: "BDT",
          value: order.grandTotal,
          contents: order.cart.map(item => ({
            id: item.customerPhone,
            quantity: item.productQuantity,
            item_price: item.price
          })),
          content_type: "product"
        }
      }
    ]
  };

  try {
    const response = await axios.post(url, payload);
    console.log("FB Event Sent:", response.data);
  } catch (error) {
    console.error("FB Event Error:", error.response?.data || error.message);
  }
};





// MongoDB connection
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// DB collections
let ordersCollection;

async function run() {
  try {
    const db = client.db('sohojPonnoDB'); // Your DB name
    ordersCollection = db.collection('orders'); // Orders collection
    console.log("Connected to MongoDB and ready.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
run();

// Nodemailer transporter (for email sending)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.ADMIN_EMAIL, // your gmail (admin)
    pass: process.env.ADMIN_EMAIL_PASSWORD, // gmail app password
  }
});

// Send Email function
const sendOrderEmail = async (order) => {
  const mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: process.env.ADMIN_EMAIL, // send to yourself (admin)
    subject: `New Order Received - ${order.customerName}`,
    html: `
      <h2>New Order Received</h2>
      <p><strong>Name:</strong> ${order.customerName}</p>
      <p><strong>Phone:</strong> ${order.customerPhone}</p>
      <p><strong>Address:</strong> ${order.customerAddress}</p>
      <h3>Order Details:</h3>
      <ul>
        ${order.cart.map(item => `
          <li>${item.name} (${item.quantity}) x ${item.productQuantity} pcs - ৳${item.price * item.productQuantity}</li>
        `).join('')}
      </ul>
      <p><strong>Total Amount:</strong> ৳${order.grandTotal}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Failed to send order email:", error);
  }
};

// Routes
app.get('/', (req, res) => {
  res.send("Sohoj Ponno Server...");
});

// POST Order (Save order)
app.post('/api/orders', async (req, res) => {
  try {
    const orderData = req.body;
    const result = await ordersCollection.insertOne(orderData);

    // Send email
    await sendOrderEmail(orderData);

    // Send event to Facebook
    await sendFacebookEvent({
      ...orderData,
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      userAgent: req.headers['user-agent']
    });

    res.status(201).send({
      message: "Order placed successfully.",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// GET Orders (For Admin dashboard)
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await ordersCollection.find().sort({ _id: -1 }).toArray();
    res.send(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app; // Export for Vercel deployment
