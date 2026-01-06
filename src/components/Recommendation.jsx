import { useState } from "react";
import "../styles/recommendation.css";

function Recommendation() {
  const [added, setAdded] = useState(false);

  return (
    <div className="card">
      <h3>Recommended for your order</h3>

      <div className="recommendation-item row">
        <img
          src="data:image/jpeg;base64,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"
          alt="Accessory"
          className="recommendation-image"
        />

        <div className="recommendation-info">
          <p className="bold">Headphone Carry Case</p>
          <p className="recommendation-subtext">
            Protects your headphones while traveling
          </p>
        </div>

        <div className="recommendation-action">
          <p className="bold">₹499</p>

          {!added ? (
            <button
              className="secondary-btn"
              onClick={() => setAdded(true)}
            >
              Add
            </button>
          ) : (
            <span className="added-text">Added ✓</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Recommendation;


