import "../styles/orderStatus.css";

const steps = ["PLACED", "PACKED", "SHIPPED", "OUT_FOR_DELIVERY", "DELIVERED"];

function OrderStatus({ currentStatus }) {
  return (
    <div className="card">
      <h2>Order Status</h2>

      <ul className="timeline">
        {steps.map(step => (
          <li
            key={step}
            className={
              steps.indexOf(step) < steps.indexOf(currentStatus)
                ? "done"
                : steps.indexOf(step) === steps.indexOf(currentStatus)
                ? "active"
                : ""
            }
          >
            {step.replaceAll("_", " ")}
          </li>
        ))}
      </ul>

      <p><strong>ETA:</strong> 12 January</p>
    </div>
  );
}

export default OrderStatus;
