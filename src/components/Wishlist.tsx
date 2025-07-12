
// import React from "react";
// import { Heart } from "lucide-react";
// import { Link } from "react-router-dom";

// const Wishlist: React.FC = () => {
//     return (
//         <div className="max-w-4xl mx-auto py-14 px-6">
//             <div className="bg-white shadow-md rounded-xl p-8 text-center">
//                 <div className="flex justify-center mb-4">
//                     <Heart className="w-10 h-10 text-[#FF4D67]" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-[#1A4D2E] mb-2">My Wishlist</h2>
//                 <p className="text-gray-600 mb-6">You haven’t added anything to your wishlist yet.</p>

//                 <Link to="/" className="inline-block bg-[#FF9F29] text-white px-6 py-2 rounded hover:bg-[#e18e25] transition">
//                     Explore Products
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Wishlist;
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Wishlist: React.FC = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="max-w-4xl mx-auto py-10 px-4">
//             <button
//                 onClick={() => navigate(-1)}
//                 className="mb-6 text-blue-600 hover:underline text-lg"
//             >
//                 ← Back to Home
//             </button>

//             <h2 className="text-2xl font-bold text-[#1A4D2E] mb-4">❤️ My Wishlist</h2>
//             <p className="text-gray-600 text-lg">You haven’t added anything yet.</p>
//         </div>
//     );
// };

// export default Wishlist;
import React from "react";
import { Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Wishlist: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-4xl mx-auto py-14 px-6">
            {/* Back to Home link */}
            <button
                onClick={() => navigate("/")}
                className="mb-6 text-blue-600 hover:underline text-lg font-medium"
            >
                ← Back to Home
            </button>

            <div className="bg-white shadow-md rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                    <Heart className="w-10 h-10 text-[#FF4D67]" />
                </div>
                <h2 className="text-2xl font-bold text-[#1A4D2E] mb-2">My Wishlist</h2>
                <p className="text-gray-600 mb-6">You haven’t added anything to your wishlist yet.</p>

                <Link
                    to="/"
                    className="inline-block bg-[#FF9F29] text-white px-6 py-2 rounded hover:bg-[#e18e25] transition"
                >
                    Explore Products
                </Link>
            </div>
        </div>
    );
};

export default Wishlist;
