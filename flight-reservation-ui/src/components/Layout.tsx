import Navbar from "./Navbar";

export default function Layout({ children }: any) {
    return (
        <div className="min-h-screen bg-slate-100">
            <Navbar />
            <div className="max-w-6xl mx-auto p-6">
                {children}
            </div>
        </div>
    );
}