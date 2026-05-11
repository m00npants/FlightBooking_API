import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getFlights } from "../api/flights";

export default function Flights() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        getFlights().then(setFlights);
    }, []);

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">All Flights</h1>

            <div className="grid md:grid-cols-3 gap-4">
                {flights.map((f: any) => (
                    <div key={f.id} className="bg-white p-4 rounded shadow">
                        {f.origin} → {f.destination}
                    </div>
                ))}
            </div>
        </Layout>
    );
}