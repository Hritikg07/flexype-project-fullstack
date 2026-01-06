import { addProtection } from "../services/orderService";
import { trackEvent } from "../services/analyticsService";
import { useState } from "react";

function ProtectionPlan({ onDismiss, onAdd }) {
  const [loading, setLoading] = useState(false);

  const handleAddProtection = async () => {
    setLoading(true);

    // Optimistic UI update
    onAdd();
    trackEvent("protection_added", { orderId: "ORD123456" });

    try {
      await addProtection("ORD123456");
    } catch (err) {
      // Optional: rollback logic could go here
      console.error("Failed to add protection");
    }
  };

  return (
    <div className="card highlight">
      <div className="row">
        <h3>Protect your purchase</h3>
        <button
          className="link"
          onClick={() => {
            trackEvent("protection_dismissed", { orderId: "ORD123456" });
            onDismiss();
          }}
          disabled={loading}
        >
          Not now
        </button>
      </div>

      <p>Covers accidental damage and extends warranty.</p>

      <div className="row">
        <span className="bold">₹199</span>
        <button onClick={handleAddProtection} disabled={loading}>
          {loading ? "Adding..." : "Add protection"}
        </button>
      </div>
    </div>
  );
}

export default ProtectionPlan;
