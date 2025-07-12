
// import React from "react";

// const UserProfile: React.FC = () => {
//     return (
//         <div className="max-w-3xl mx-auto py-12 px-6">
//             <div className="bg-white shadow-md rounded-xl p-8">
//                 <div className="flex flex-col items-center text-center">
//                     <div className="w-24 h-24 rounded-full bg-[#1A4D2E] text-white flex items-center justify-center text-3xl font-bold mb-4 shadow-inner">
//                         VS
//                     </div>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-2">Vaishnavi Singh</h2>
//                     <p className="text-gray-500 text-sm">Member since Jan 2024</p>
//                 </div>

//                 <div className="mt-8 space-y-4">
//                     <div className="flex items-center justify-between border-b pb-3">
//                         <span className="text-gray-600 font-medium">📧 Email</span>
//                         <span className="text-gray-800">vaishnavi@example.com</span>
//                     </div>
//                     <div className="flex items-center justify-between border-b pb-3">
//                         <span className="text-gray-600 font-medium">📞 Phone</span>
//                         <span className="text-gray-800">8176057491</span>
//                     </div>
//                     <div className="flex items-center justify-between">
//                         <span className="text-gray-600 font-medium">🆔 User ID</span>
//                         <span className="text-gray-800">#PP1025</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserProfile;
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const UserProfile: React.FC = () => {
    const navigate = useNavigate();

    const backBtnRef = useRef<HTMLButtonElement | null>(null);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const infoRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (backBtnRef.current && cardRef.current && infoRef.current) {
            // Animate back button
            gsap.from(backBtnRef.current, {
                opacity: 0,
                x: -20,
                duration: 0.5,
                ease: "power2.out",
            });

            // Animate the profile card
            gsap.from(cardRef.current, {
                opacity: 0,
                y: 40,
                duration: 0.6,
                delay: 0.2,
                ease: "power2.out",
            });

            // Animate profile info rows
            gsap.fromTo(
                Array.from(infoRef.current.children),
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 0.5,
                    delay: 0.3,
                    ease: "power2.out",
                }
            );
        }
    }, []);

    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            {/* Back to Home link */}
            <button
                ref={backBtnRef}
                onClick={() => navigate("/")}
                className="mb-6 text-blue-600 hover:underline text-lg font-medium"
            >
                ← Back to Home
            </button>

            <div ref={cardRef} className="bg-white shadow-md rounded-xl p-8">
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-[#1A4D2E] text-white flex items-center justify-center text-3xl font-bold mb-4 shadow-inner">
                        VS
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Vaishnavi Singh</h2>
                    <p className="text-gray-500 text-sm">Member since Jan 2024</p>
                </div>

                <div className="mt-8 space-y-4" ref={infoRef}>
                    <div className="flex items-center justify-between border-b pb-3">
                        <span className="text-gray-600 font-medium">📧 Email</span>
                        <span className="text-gray-800">vaishnavi@example.com</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-3">
                        <span className="text-gray-600 font-medium">📞 Phone</span>
                        <span className="text-gray-800">8176057491</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-600 font-medium">🆔 User ID</span>
                        <span className="text-gray-800">#PP1025</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
