let order = {
  orderId: "ORD123456",
  status: "SHIPPED",
  items: [
    {
      id: "P001",
      name: "Wireless Headphones",
      price: 2999,
      category: "electronics"
    }
  ],
  delivery: {
    eta: "12 January",
    address: "New Delhi, India"
  },
  addons: {
    protection: false,
    deliveryUpgrade: false,
    subscription: false
  }
};

module.exports = order;
