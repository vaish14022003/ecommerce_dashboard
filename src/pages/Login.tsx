
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/PrimePick-logo-transparent.jpg";
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { FiPhone } from "react-icons/fi";

const Login: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("India");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [submitError, setSubmitError] = useState("");
    const [countryError, setCountryError] = useState("");

    const validatePhone = (input: string) =>
        /^[0-9]{10}$/.test(input);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let valid = true;

        if (!dob || !address) {
            toast.error("❌ DOB and Address are required.");
            valid = false;
        } else {
            const today = new Date();
            const dobDate = new Date(dob);
            let age = today.getFullYear() - dobDate.getFullYear();
            const m = today.getMonth() - dobDate.getMonth();

            if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
                age--;
            }

            if (age < 18) {
                toast.error("❌ You must be at least 18 years old.");
                valid = false;
            }
        }

        if (/\s/.test(username)) {
            setEmailError("Email should not contain spaces");
            valid = false;
        } else if (!validateEmail(username)) {
            setEmailError("Please enter a valid email address");
            valid = false;
        } else {
            setEmailError("");
        }

        if (password.trim().length < 8) {
            setPasswordError("Password must be at least 8 characters long");
            valid = false;
        } else {
            setPasswordError("");
        }

        if (!validatePhone(phone)) {
            setPhoneError("Phone number must be exactly 10 digits");
            valid = false;
        } else {
            setPhoneError("");
        }

        if (country.trim().toLowerCase() !== "india") {
            setCountryError("Only India is allowed");
            toast.error("Only India is allowed");
            valid = false;
        } else {
            setCountryError("");
        }

        if (!valid) return;

        if (username === "user@example.com" && password === "password123") {
            login();
            toast.success("✅ Login successful!", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
            });
            navigate("/");
        } else {
            setSubmitError("Invalid username or password");
            toast.error("❌ Invalid username or password", {
                position: "top-right",
                autoClose: 2500,
                theme: "colored",
            });
        }
    };

    const googleLogin = useGoogleLogin({
        onSuccess: () => {
            login();
            toast.success("✅ Login with Google successful!", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
            });
            navigate("/");
        },
        onError: () => {
            toast.error("❌ Google login failed. Please try again.", {
                position: "top-right",
                autoClose: 2500,
                theme: "colored",
            });
        },
    });

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <img
                src={logo}
                alt="Logo"
                className="w-32 h-32 rounded-full object-cover shadow mb-6"
            />

            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-4 text-[#1A4D2E]">
                    Welcome Back
                </h2>
                <p className="text-center text-sm text-gray-500 mb-6">
                    Please log in to continue
                </p>

                {submitError && (
                    <p className="text-red-500 text-sm text-center mb-4">{submitError}</p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email */}
                    <div>
                        <input
                            type="text"
                            placeholder="Email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value.trimStart())}
                            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF9F29] ${emailError ? "border-red-500" : ""}`}
                            required
                        />
                        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (passwordError && e.target.value.trim().length >= 8) {
                                    setPasswordError("");
                                }
                            }}
                            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF9F29] ${passwordError ? "border-red-500" : ""}`}
                            required
                        />
                        {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                        <div className="text-right mt-1">
                            <a
                                href="/forgot-password"
                                className="text-sm text-blue-600 underline hover:text-blue-800 transition"
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </div>

                    {/* DOB */}
                    <div>
                        <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF9F29]"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <div className={`flex items-center gap-2 border rounded px-3 py-2 bg-gray-100 ${phoneError ? "border-red-500" : ""} focus-within:ring-2 focus-within:ring-[#FF9F29]`}>
                            <span className="text-sm font-medium text-gray-700">🇮🇳 +91</span>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => {
                                    const input = e.target.value;
                                    const cleaned = input.replace(/[^0-9]/g, "");
                                    if (cleaned.length <= 10) setPhone(cleaned);

                                    if (/\D/.test(input)) {
                                        setPhoneError("Only digits allowed");
                                    } else if (/\s/.test(input)) {
                                        setPhoneError("Phone number should not contain spaces");
                                    } else if (cleaned.length !== 10) {
                                        setPhoneError("Phone number must be exactly 10 digits");
                                    } else {
                                        setPhoneError("");
                                    }
                                }}
                                className="flex-1 bg-transparent focus:outline-none"
                                inputMode="numeric"
                                maxLength={10}
                                required
                            />
                            <FiPhone className="text-gray-500" />
                        </div>
                        {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
                    </div>

                    {/* Address */}
                    <div>
                        <select
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                            className="w-full px-4 py-2 border rounded bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF9F29]"
                            required
                        >
                            <option value="" disabled>Select your city/state</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                        </select>
                    </div>

                    {/* Country */}
                    <div>
                        <input
                            type="text"
                            value={country}
                            placeholder="Country"
                            onChange={(e) => {
                                //const value=e.target.value;
                                const value = e.target.value;
                                const regex = /^[a-zA-Z\s]*$/;

                                if (regex.test(value)) {
                                    setCountry(value);
                                    setCountryError(""); 
                                } else {
                                    setCountry(value); 
                                    setCountryError("Only letters are allowed");
                                }
                            }}
                                
                                //setCountry(e.target.value)}
                            
                            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF9F29] ${countryError ? "border-red-500" : ""}`}
                            required
                        />
                        {countryError && <p className="text-red-500 text-sm mt-1">{countryError}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#1A4D2E] text-white py-2 rounded hover:bg-[#163c25] transition"
                    >
                        Login
                    </button>
                </form>

                <div className="flex items-center my-6">
                    <hr className="flex-grow border-t border-gray-300" />
                    <span className="mx-4 text-gray-500 text-sm">OR</span>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>

                <button
                    onClick={() => googleLogin()}
                    className="w-full flex items-center justify-center gap-3 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    <FcGoogle className="w-5 h-5" />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
