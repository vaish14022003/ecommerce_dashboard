
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Moon, Bell, UserCog, Palette } from "lucide-react";

// const Settings: React.FC = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="max-w-4xl mx-auto py-12 px-6">
//             <button
//                 onClick={() => navigate(-1)}
//                 className="mb-4 text-blue-600 hover:underline text-lg"
//             >
//                 ← Back to Home
//             </button>

//             <div className="bg-white shadow-md rounded-xl p-8">
//                 <h2 className="text-2xl font-bold text-[#1A4D2E] mb-6 flex items-center gap-2">
//                     <UserCog className="w-6 h-6 text-[#1A4D2E]" />
//                     Account Settings
//                 </h2>

//                 <div className="space-y-6">
//                     {/* Theme Preference */}
//                     <div className="flex items-center justify-between border-b pb-4">
//                         <div className="flex items-center gap-3">
//                             <Palette className="text-gray-600 w-5 h-5" />
//                             <span className="text-gray-800 font-medium">Theme</span>
//                         </div>
//                         <span className="text-gray-500 italic">Light / Dark (Coming Soon)</span>
//                     </div>

//                     {/* Notification Settings */}
//                     <div className="flex items-center justify-between border-b pb-4">
//                         <div className="flex items-center gap-3">
//                             <Bell className="text-gray-600 w-5 h-5" />
//                             <span className="text-gray-800 font-medium">Notifications</span>
//                         </div>
//                         <span className="text-gray-500 italic">Custom alerts (Coming Soon)</span>
//                     </div>

//                     {/* Appearance */}
//                     <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-3">
//                             <Moon className="text-gray-600 w-5 h-5" />
//                             <span className="text-gray-800 font-medium">Appearance</span>
//                         </div>
//                         <span className="text-gray-500 italic">Compact / Spacious (Coming Soon)</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Settings;

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Sun, Bell, UserCog, ShieldCheck, Mail } from "lucide-react";
import gsap from "gsap";

const Settings: React.FC = () => {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Dummy toggles
    const [darkMode, setDarkMode] = useState(false);
    const [emailNotif, setEmailNotif] = useState(true);
    const [orderUpdates, setOrderUpdates] = useState(true);
    const [dataSharing, setDataSharing] = useState(false);

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
        );

        gsap.fromTo(
            sectionRefs.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.2,
                delay: 0.3,
            }
        );
    }, []);

    return (
        <div className="max-w-4xl mx-auto py-12 px-6" ref={containerRef}>
            <button
                onClick={() => navigate(-1)}
                className="mb-4 text-blue-600 hover:underline text-lg"
            >
                ← Back to Home
            </button>

            <div className="bg-white shadow-md rounded-xl p-8">
                <h2 className="text-2xl font-bold text-[#1A4D2E] mb-6 flex items-center gap-2">
                    <UserCog className="w-6 h-6 text-[#1A4D2E]" />
                    Account Settings
                </h2>

                <div className="space-y-6">
                    {/* Theme Preference */}
                    <div
                        className="flex items-center justify-between border-b pb-4"
                        ref={(el) => (sectionRefs.current[0] = el)}
                    >
                        <div className="flex items-center gap-3">
                            {darkMode ? (
                                <Moon className="text-gray-600 w-5 h-5" />
                            ) : (
                                <Sun className="text-yellow-500 w-5 h-5" />
                            )}
                            <span className="text-gray-800 font-medium">Dark Mode</span>
                        </div>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={() => setDarkMode(!darkMode)}
                                className="accent-blue-600 w-5 h-5"
                            />
                            <span className="text-gray-500 text-sm">
                                {darkMode ? "On" : "Off"}
                            </span>
                        </label>
                    </div>

                    {/* Email Notifications */}
                    <div
                        className="flex items-center justify-between border-b pb-4"
                        ref={(el) => (sectionRefs.current[1] = el)}
                    >
                        <div className="flex items-center gap-3">
                            <Mail className="text-gray-600 w-5 h-5" />
                            <span className="text-gray-800 font-medium">Email Notifications</span>
                        </div>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={emailNotif}
                                onChange={() => setEmailNotif(!emailNotif)}
                                className="accent-blue-600 w-5 h-5"
                            />
                            <span className="text-gray-500 text-sm">
                                {emailNotif ? "Enabled" : "Disabled"}
                            </span>
                        </label>
                    </div>

                    {/* Order Updates */}
                    <div
                        className="flex items-center justify-between border-b pb-4"
                        ref={(el) => (sectionRefs.current[2] = el)}
                    >
                        <div className="flex items-center gap-3">
                            <Bell className="text-gray-600 w-5 h-5" />
                            <span className="text-gray-800 font-medium">Order Updates</span>
                        </div>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={orderUpdates}
                                onChange={() => setOrderUpdates(!orderUpdates)}
                                className="accent-blue-600 w-5 h-5"
                            />
                            <span className="text-gray-500 text-sm">
                                {orderUpdates ? "Enabled" : "Disabled"}
                            </span>
                        </label>
                    </div>

                    {/* Privacy Setting */}
                    <div
                        className="flex items-center justify-between"
                        ref={(el) => (sectionRefs.current[3] = el)}
                    >
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="text-gray-600 w-5 h-5" />
                            <span className="text-gray-800 font-medium">Data Sharing</span>
                        </div>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={dataSharing}
                                onChange={() => setDataSharing(!dataSharing)}
                                className="accent-blue-600 w-5 h-5"
                            />
                            <span className="text-gray-500 text-sm">
                                {dataSharing ? "Allowed" : "Restricted"}
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;


