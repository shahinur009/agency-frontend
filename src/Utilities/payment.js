const axios = require("axios");

const API_KEY = `${process.env.VITE_API_KEY}`;
const BASE_URL = `${process.env.VITE_BASE_URL}`;

async function createPayment() {
  try {
    const paymentData = {
      fullname: "John Doe",
      email: "john.doe@example.com",
      amount: "1000", 
      metadata: {
        success_url: "https://yourdomain.com/success",
        cancel_url: "https://yourdomain.com/cancel",
        webhook_url: "https://yourdomain.com/webhook", 
      },
    };

    const response = await axios.post(BASE_URL, paymentData, {
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
    });

    console.log("Payment created successfully:", response.data);
    // এখানে ইউজারকে পেমেন্ট পেজে রিডাইরেক্ট করুন
    // response.data.payment_url ব্যবহার করতে পারেন
  } catch (error) {
    console.error(
      "Error creating payment:",
      error.response?.data || error.message
    );
  }
}

createPayment();
