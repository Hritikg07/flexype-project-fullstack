import "../styles/skeleton.css";

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-line title"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line short"></div>
    </div>
  );
}

export default SkeletonCard;
