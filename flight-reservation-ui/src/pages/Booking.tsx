import { useState } from "react";
import Layout from "../components/Layout";
import { bookFlight } from "../api/flights";

export default function Booking() {
    const [flightId, setFlightId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    async function handleBook() {
        await bookFlight(Number(flightId), {
            passengerName: name,
            passengerEmail: email,
        });

        alert("Booked!");
    }

    return (
        <Layout>
            <h1 className="text-2xl font-bold">Book Flight</h1>

            <input placeholder="Flight ID" onChange={e => setFlightId(e.target.value)} />
            <input placeholder="Name" onChange={e => setName(e.target.value)} />
            <input placeholder="Email" onChange={e => setEmail(e.target.value)} />

            <button onClick={handleBook} className="bg-blue-600 text-white px-4 py-2 mt-2">
                Book
            </button>
        </Layout>
    );
}