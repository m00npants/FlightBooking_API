const BASE_URL = "http://localhost:8080/api";

export async function getFlights() {
    return fetch(`${BASE_URL}/flights`).then(r => r.json());
}

export async function getAvailableFlights() {
    return fetch(`${BASE_URL}/flights/available`).then(r => r.json());
}

export async function bookFlight(flightId: number, data: any) {
    return fetch(`${BASE_URL}/flights/${flightId}/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }).then(r => r.json());
}

export async function getBookings(email: string) {
    return fetch(`${BASE_URL}/flights/bookings?email=${email}`)
        .then(r => r.json());
}

export async function cancelBooking(flightId: number, email: string) {
    return fetch(`${BASE_URL}/flights/${flightId}/cancel?email=${email}`, {
        method: "DELETE",
    }).then(r => r.json());
}