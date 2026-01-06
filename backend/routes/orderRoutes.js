const express = require("express");
const router = express.Router();
let order = require("../data/order");

// Get order details
router.get("/:orderId", (req, res) => {
  res.json(order);
});

// Add protection plan
router.post("/:orderId/add-protection", (req, res) => {
  order.addons.protection = true;
  res.json({ success: true, order });
});

// Add delivery upgrade
router.post("/:orderId/add-delivery-upgrade", (req, res) => {
  order.addons.deliveryUpgrade = true;
  res.json({ success: true, order });
});

// Start subscription
router.post("/subscription/start", (req, res) => {
  order.addons.subscription = true;
  res.json({ success: true });
});

module.exports = router;
