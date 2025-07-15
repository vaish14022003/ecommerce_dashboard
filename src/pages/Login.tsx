


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import logo from "../assets/PrimePick-logo-transparent.jpg";
// import { toast } from "react-toastify";

// const Login: React.FC = () => {
//     const { login } = useAuth();
//     const navigate = useNavigate();

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [passwordError, setPasswordError] = useState("");
//     const [submitError, setSubmitError] = useState("");

//     const validateEmail = (email: string) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();

//         let valid = true;

//         // Email validation
//         if (/\s/.test(username)) {
//             setEmailError("Email should not contain spaces");
//             valid = false;
//         } else if (!validateEmail(username)) {
//             setEmailError("Please enter a valid email address");
//             valid = false;
//         } else {
//             setEmailError("");
//         }

//         // Password validation
//         if (password.length < 8) {
//             setPasswordError("Password must be at least 8 characters long");
//             valid = false;
//         } else {
//             setPasswordError("");
//         }

//         if (!valid) return;

//         // Dummy credentials check
//         if (username === "user@example.com" && password === "password123") {
//             login();
//             toast.success("✅ Login successful!", {
//                 position: "top-right",
//                 autoClose: 2000,
//                 theme: "colored",
//             });
//             navigate("/");
//         } else {
//             setSubmitError("Invalid username or password");
//             toast.error("❌ Invalid username or password", {
//                 position: "top-right",
//                 autoClose: 2500,
//                 theme: "colored",
//             });
//         }
//     };

//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
//             <img
//                 src={logo}
//                 alt="Logo"
//                 className="w-32 h-32 rounded-full object-cover shadow mb-6"
//             />

//             <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-bold text-center mb-4 text-[#1A4D2E]">Welcome Back</h2>
//                 <p className="text-center text-sm text-gray-500 mb-6">Please log in to continue</p>

//                 {submitError && (
//                     <p className="text-red-500 text-sm text-center mb-4">{submitError}</p>
//                 )}

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     {/* <div>
//                         <input
//                             type="text"
//                             placeholder="Email"
//                             value={username}
//                             onChange={(e) => {
//                                 const input = e.target.value;
//                                 setUsername(input.trimStart());

//                                 if (/\s/.test(input)) {
//                                     setEmailError("Email should not contain spaces");
//                                 } else if (!validateEmail(input)) {
//                                     setEmailError("Please enter a valid email address");
//                                 } else {
//                                     setEmailError("");
//                                 } if (/\s/.test(input)) 
                              
//                             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF9F29]"
//                             required
//                         />
//                         {emailError && (
//                             <p className="text-red-500 text-sm mt-1">{emailError}</p>
//                         )}
//                     </div> */}
//                     <div>
//                         <input
//                             type="text"
//                             placeholder="Email"
//                             value={username}
//                             onChange={(e) => {
//                                 const input = e.target.value;

//                                 // Remove all spaces and update the state
//                                 setUsername(input.replace(/\s/g, ""));

//                                 // Perform validation on the input with spaces removed
//                                 if (/\s/.test(input)) {
//                                     // This condition is now just for showing the error message,
//                                     // as the replace method already handles preventing the space.
//                                     setEmailError("Email should not contain spaces");
//                                 } else if (!validateEmail(input)) {
//                                     setEmailError("Please enter a valid email address");
//                                 } else {
//                                     setEmailError("");
//                                 }
//                             }}
//                             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF9F29]"
//                             required
//                         />
//                         {emailError && (
//                             <p className="text-red-500 text-sm mt-1">{emailError}</p>
//                         )}
//                     </div>
                   

//                     <div>
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => {
//                                 setPassword(e.target.value);
//                                 if (passwordError && e.target.value.length >= 8) {
//                                     setPasswordError("");
//                                 }
//                             }}
//                             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF9F29]"
//                             required
//                         />
//                         {passwordError && (
//                             <p className="text-red-500 text-sm mt-1">{passwordError}</p>
//                         )}
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-[#1A4D2E] text-white py-2 rounded hover:bg-[#163c25] transition"
//                     >
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/PrimePick-logo-transparent.jpg";
import { toast } from "react-toastify";
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';

const Login: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [submitError, setSubmitError] = useState("");

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let valid = true;

        // Email validation
        if (/\s/.test(username)) {
            setEmailError("Email should not contain spaces");
            valid = false;
        } else if (!validateEmail(username)) {
            setEmailError("Please enter a valid email address");
            valid = false;
        } else {
            setEmailError("");
        }

        // Password validation
        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters long");
            valid = false;
        } else {
            setPasswordError("");
        }

        if (!valid) return;

        // Dummy credentials check
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

    // Google OAuth login logic
    const googleLogin = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse);
            login(); // Update your app's authentication state
            toast.success("✅ Login with Google successful!", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
            });
            navigate("/");
        },
        onError: errorResponse => {
            console.error("Google login failed:", errorResponse);
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
                <h2 className="text-2xl font-bold text-center mb-4 text-[#1A4D2E]">Welcome Back</h2>
                <p className="text-center text-sm text-gray-500 mb-6">Please log in to continue</p>

                {submitError && (
                    <p className="text-red-500 text-sm text-center mb-4">{submitError}</p>
                )}

                {/* Traditional Login Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value.trimStart())}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF9F29]"
                            required
                        />
                        {emailError && (
                            <p className="text-red-500 text-sm mt-1">{emailError}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (passwordError && e.target.value.length >= 8) {
                                    setPasswordError("");
                                }
                            }}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF9F29]"
                            required
                        />
                        {passwordError && (
                            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#1A4D2E] text-white py-2 rounded hover:bg-[#163c25] transition"
                    >
                        Login
                    </button>
                </form>

                {/* Separator and Google Login Button */}
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