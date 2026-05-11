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

            {/* 🌍 DESTINATIONS SECTION */}
            <div className="mt-10">

                <h2 className="text-white text-xl font-semibold mb-4 text-center">
                    Popular destinations
                </h2>

                <div className="dest-grid">
                    {[
                        {
                            city: "Paris",
                            img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
                        },
                        {
                            city: "Tokyo",
                            img: "https://images.unsplash.com/photo-1549693578-d683be217e58"
                        },
                        {
                            city: "New York",
                            img: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f"
                        },
                        {
                            city: "London",
                            img: "https://images.unsplash.com/photo-1486299267070-83823f5448dd"
                        },
                        {
                            city: "Barcelona",
                            img: "https://images.unsplash.com/photo-1509840841025-9088ba78a826"
                        },
                        {
                            city: "Dubai",
                            img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
                        },
                        {
                            city: "Sydney",
                            img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9"
                        },
                        {
                            city: "Rome",
                            img: "https://images.unsplash.com/photo-1529260830199-42c24126f198"
                        }

                    ].map((d) => (
                        <div key={d.city} className="dest-card">
                            <img src={d.img} className="dest-img" />
                            <div className="dest-label">{d.city}</div>
                        </div>
                    ))}
                </div>

            </div>

            {/* ⚡ LAST MINUTE DEALS SECTION */}
            <div className="mt-16">

                <h2 className="text-white text-xl font-semibold mb-4 text-center">
                    Last minute deals
                </h2>

                <div className="dest-grid">
                    {[
                        {
                            city: "Bangkok",
                            img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365"
                        },
                        {
                            city: "Istanbul",
                            img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200"
                        },
                        {
                            city: "Los Angeles",
                            img: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7"
                        },
                        {
                            city: "Singapore",
                            img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd"
                        },
                        {
                            city: "Amsterdam",
                            img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=800&q=60"
                        },
                        {
                            city: "Seoul",
                            img: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=800&q=60"
                        },
                        {
                            city: "Miami",
                            img: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?auto=format&fit=crop&w=800&q=60"
                        },
                        {
                            city: "Prague",
                            img: "https://images.unsplash.com/photo-1541849546-216549ae216d"
                        }
                    ].map((d) => (
                        <div key={d.city} className="dest-card">
                            <img src={d.img} className="dest-img" />
                            <div className="dest-label">{d.city}</div>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}