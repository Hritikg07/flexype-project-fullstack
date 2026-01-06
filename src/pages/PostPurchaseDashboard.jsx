import { useEffect, useState } from "react";
import "../styles/dashboard.css";
import { fetchOrder } from "../services/orderService";

import OrderSummary from "../components/OrderSummary";
import OrderStatus from "../components/OrderStatus";
import ProtectionPlan from "../components/ProtectionPlan";
import Recommendation from "../components/Recommendation";
import DeliveryUpgrade from "../components/DeliveryUpgrade";
import SubscriptionOffer from "../components/SubscriptionOffer";
import SkeletonCard from "../components/SkeletonCard";

function PostPurchaseDashboard() {
  const [loading, setLoading] = useState(true);
  const [orderStatus, setOrderStatus] = useState("SHIPPED");
  const [showProtection, setShowProtection] = useState(true);
  const [hasProtection, setHasProtection] = useState(false);
  const [protectionAdded, setProtectionAdded] = useState(false);

  useEffect(() => {
    fetchOrder("ORD123456").then((data) => {
      setOrderStatus(data.status);
      setHasProtection(data.addons?.protection || false);
      setLoading(false);
    });
  }, []);

  // Optional: auto-hide success message after 5 seconds
  useEffect(() => {
    if (protectionAdded) {
      const timer = setTimeout(() => {
        setProtectionAdded(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [protectionAdded]);

  if (loading) {
    return (
      <div className="dashboard-container">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <h1>Thank you for your order</h1>
      <p className="subtitle">Manage your order and preferences below.</p>

      <OrderSummary />
      <OrderStatus currentStatus={orderStatus} />

      {/* ✅ Success feedback */}
      {protectionAdded && (
        <div className="card success">
          <strong>Protection added</strong>
          <p>
            Your purchase is now covered. You can manage this anytime from your
            order settings.
          </p>
        </div>
      )}

      {/* ✅ Protection plan (only if not already added) */}
      {orderStatus !== "DELIVERED" && showProtection && !hasProtection && (
        <ProtectionPlan
          onDismiss={() => setShowProtection(false)}
          onAdd={() => {
            setHasProtection(true);
            setProtectionAdded(true);
          }}
        />
      )}

      {orderStatus === "PLACED" && <DeliveryUpgrade />}
      {orderStatus === "DELIVERED" && <SubscriptionOffer />}

      <Recommendation />
    </div>
  );
}

export default PostPurchaseDashboard;



