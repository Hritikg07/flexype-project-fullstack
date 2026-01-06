const BASE_URL = "http://localhost:5897/api/orders";

export async function fetchOrder(orderId) {
  const res = await fetch(`${BASE_URL}/${orderId}`);
  return res.json();
}

export async function addProtection(orderId) {
  return fetch(`${BASE_URL}/${orderId}/add-protection`, {
    method: "POST"
  });
}
