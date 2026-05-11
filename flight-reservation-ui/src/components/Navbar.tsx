import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/flights">Flights</Link>
            <Link to="/available">Available</Link>
            <Link to="/book">Book</Link>
        </nav>
    );
}