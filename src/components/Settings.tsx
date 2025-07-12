
// import React from "react";
// import { Moon, Bell, UserCog, Palette } from "lucide-react";

// const Settings: React.FC = () => {
//     return (
//         <div className="max-w-4xl mx-auto py-12 px-6">
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


// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Settings: React.FC = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="max-w-4xl mx-auto py-10 px-4">
//             {/* <button
//                 onClick={() => navigate(-1)}
//                 className="mb-6 text-blue-600 hover:underline text-sm"
//             >
//                 ← Back
//             </button> */}

//             <h2 className="text-2xl font-bold text-[#1A4D2E] mb-4">⚙️ Account Settings</h2>
//             <p className="text-gray-600 text-lg">
//                 Preferences, theme, and more customization features coming soon!
//             </p>
//             <button
//                 onClick={() => navigate(-1)}
//                 className="mb-6 text-blue-600 hover:underline text-lg mt-20"
//             >
//                 ← Back to Home
//             </button>

//         </div>
//     );
// };

// export default Settings;
import React from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Bell, UserCog, Palette } from "lucide-react";

const Settings: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-4xl mx-auto py-12 px-6">
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
                    <div className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center gap-3">
                            <Palette className="text-gray-600 w-5 h-5" />
                            <span className="text-gray-800 font-medium">Theme</span>
                        </div>
                        <span className="text-gray-500 italic">Light / Dark (Coming Soon)</span>
                    </div>

                    {/* Notification Settings */}
                    <div className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center gap-3">
                            <Bell className="text-gray-600 w-5 h-5" />
                            <span className="text-gray-800 font-medium">Notifications</span>
                        </div>
                        <span className="text-gray-500 italic">Custom alerts (Coming Soon)</span>
                    </div>

                    {/* Appearance */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Moon className="text-gray-600 w-5 h-5" />
                            <span className="text-gray-800 font-medium">Appearance</span>
                        </div>
                        <span className="text-gray-500 italic">Compact / Spacious (Coming Soon)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
