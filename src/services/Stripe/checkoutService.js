const API_URL = "http://localhost:4242/api";

export async function createCheckoutSession(items, clientInfo) {
    const response = await fetch(`${API_URL}/create-checkout-session`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            items,
            clientInfo,
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "No se pudo crear el checkout.");
    }

    return data;
}