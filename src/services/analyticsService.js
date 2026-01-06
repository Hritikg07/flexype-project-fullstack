const ANALYTICS_URL = "http://localhost:5000/api/events";

export function trackEvent(eventName, metadata = {}) {
  fetch(ANALYTICS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      eventName,
      metadata
    })
  }).catch(() => {
   
  });
}
