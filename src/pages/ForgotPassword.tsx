
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/PrimePick-logo-transparent.jpg";
import { toast } from "react-toastify";

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [emailError, setEmailError] = useState("");

    const navigate = useNavigate();

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedEmail = email.trim();
        let valid = true;

        if (trimmedEmail.includes(" ")) {
            setEmailError("Email should not contain spaces");
            valid = false;
        } else if (!validateEmail(trimmedEmail)) {
            setEmailError("Please enter a valid email address");
            valid = false;
        } else {
            setEmailError("");
        }

        if (!valid) return;

        setSubmitted(true);
        toast.success("✅ Password reset link sent to your email!", {
            position: "top-right",
            autoClose: 2500,
            theme: "colored",
        });

        setTimeout(() => {
            navigate("/login");
        }, 3000);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\s/g, ""); // Remove all spaces

        setEmail(value);

        // Instantly show error if user tries to type or paste spaces
        if (e.target.value.includes(" ")) {
            setEmailError("Email should not contain spaces");
        } else {
            setEmailError("");
        }
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
                        onChange={handleEmailChange}
                        onKeyDown={(e) => {
                            if (e.key === " ") {
                                e.preventDefault(); 
                                setEmailError("Email should not contain spaces");
                            }
                        }}
                        className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF9F29] ${emailError ? "border-red-500" : ""
                            }`}
                        required
                    />
                    {emailError && (
                        <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}

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
