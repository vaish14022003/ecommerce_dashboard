import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/PrimePick-logo-transparent.jpg";
import { toast } from "react-toastify";

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const validateEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            toast.error("❌ Please enter a valid email address");
            return;
        }

        // Simulate backend call
        setSubmitted(true);
        toast.success("✅ Password reset link sent to your email!", {
            position: "top-right",
            autoClose: 2500,
            theme: "colored",
        });

        // Optionally redirect
        setTimeout(() => {
            navigate("/login");
        }, 3000);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <img
                src={logo}
                alt="Logo"
                className="w-32 h-32 rounded-full object-cover shadow mb-6"
            />

            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-4 text-[#1A4D2E]">
                    Forgot Password?
                </h2>
                <p className="text-center text-sm text-gray-500 mb-6">
                    Enter your registered email to receive a reset link
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF9F29]"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-[#1A4D2E] text-white py-2 rounded hover:bg-[#163c25] transition"
                    >
                        Send Reset Link
                    </button>
                </form>

                {submitted && (
                    <p className="text-green-600 text-sm text-center mt-4">
                        Check your email for a reset link.
                    </p>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;
