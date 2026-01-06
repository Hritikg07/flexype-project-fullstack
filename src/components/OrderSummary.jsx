

function OrderSummary() {
  return (
    <div className="card">
      <h2>Order Summary</h2>

      <div className="order-item row">

       <img
  src="https://via.placeholder.com/80"
  alt="Product"
  style={{ borderRadius: "6px" }}
/>

        <div>
          <p className="bold">Wireless Headphones</p>
          <p>Color: Black</p>
        </div>

        <p className="bold">₹2,999</p>
      </div>

      <p><strong>Order ID:</strong> ORD123456</p>
      <p><strong>Delivery:</strong> New Delhi, India</p>
    </div>
  );
}

export default OrderSummary;
