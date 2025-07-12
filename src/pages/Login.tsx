
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/PrimePick-logo-transparent.jpg"; // adjust path if needed

const Login: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Dummy credentials
        if (username === "user@example.com" && password === "password123") {
            login(); // ✅ AuthContext login
            navigate("/"); // 🔁 Redirect after login
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            {/* <img src={logo} alt="Logo" className="w-28 mb-6" /> */}
            <img
                src={logo}
                alt="Logo"
                className="w-32 h-32 rounded-full object-cover shadow mb-6"
            />


            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-4 text-[#1A4D2E]">Welcome Back</h2>
                <p className="text-center text-sm text-gray-500 mb-6">Please log in to continue</p>

                {error && (
                    <p className="text-red-500 text-sm text-center mb-4">{error}</p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF9F29]"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF9F29]"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#1A4D2E] text-white py-2 rounded hover:bg-[#163c25] transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
