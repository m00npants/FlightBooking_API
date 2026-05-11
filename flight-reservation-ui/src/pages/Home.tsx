import { useState } from "react";
import PageLayout from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const search = () => {
        navigate(`/flights?from=${from}&to=${to}`);
    };

    return (
        <PageLayout>
            {/* HERO */}
            <div className="relative overflow-hidden rounded-2xl p-12 bg-gradient-to-r from-sky-600 to-blue-800 shadow-xl">

                <div className="max-w-xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Find your next flight ✈
                    </h1>
                    <p className="text-white/80 mb-8">
                        Search flights, compare prices and book instantly.
                    </p>

                    {/* SEARCH BAR */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex flex-col md:flex-row gap-3 shadow-lg">

                        <input
                            className="flex-1 p-3 rounded-lg bg-black/30 text-white placeholder-white/60 outline-none"
                            placeholder="From (e.g. Stockholm)"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                        />

                        <input
                            className="flex-1 p-3 rounded-lg bg-black/30 text-white placeholder-white/60 outline-none"
                            placeholder="To (e.g. London)"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                        />

                        <button
                            onClick={search}
                            className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg font-semibold transition"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}