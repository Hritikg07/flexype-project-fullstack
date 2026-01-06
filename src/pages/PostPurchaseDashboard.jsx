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

 useEffect(() => {
  fetchOrder("ORD123456").then(data => {
    setOrderStatus(data.status);
    setLoading(false);
  });
}, []);

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

      {orderStatus !== "DELIVERED" && showProtection && (
        <ProtectionPlan onDismiss={() => setShowProtection(false)} />
      )}

      {orderStatus === "PLACED" && <DeliveryUpgrade />}
      {orderStatus === "DELIVERED" && <SubscriptionOffer />}

      <Recommendation />
    </div>
  );
}

export default PostPurchaseDashboard;

