

function ProtectionPlan({ onDismiss }) {
  return (
    <div className="card highlight">
      <div className="row">
        <h3>Protect your purchase</h3>
        <button className="link" onClick={onDismiss}>Not now</button>
      </div>

      <p>Covers accidental damage and extends warranty.</p>

      <div className="row">
        <span className="bold">₹199</span>
        <button>Add protection</button>
      </div>
    </div>
  );
}

export default ProtectionPlan;
