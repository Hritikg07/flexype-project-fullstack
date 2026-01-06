import "../styles/orderSummary.css";

function OrderSummary() {
  return (
    <div className="card">
      <h2>Order Summary</h2>

      <div className="order-item row">
        <img
          src="https://blaupunktaudio.in/cdn/shop/files/bh41-bluetooth-wireless-over-ear-headphone-blue-1-.0.2.jpg?v=1754296610"
          alt="Product"
          className="product-image"
        />

        <div className="product-info">
          <p className="bold">Wireless Headphones</p>
          <p>Color: Black</p>
        </div>

        <p className="bold">₹2,999</p>
      </div>

      <p>
        <strong>Order ID:</strong> ORD123456
      </p>
      <p>
        <strong>Delivery:</strong> New Delhi, India
      </p>
    </div>
  );
}

export default OrderSummary;
