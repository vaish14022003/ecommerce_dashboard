
import React, { useEffect, useRef } from "react";
import { Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";

const Wishlist: React.FC = () => {
    const navigate = useNavigate();

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".wishlist-back", {
                opacity: 0,
                x: -20,
                duration: 0.5,
                ease: "power2.out",
            });

            gsap.from(".wishlist-card", {
                opacity: 0,
                y: 30,
                duration: 0.7,
                delay: 0.2,
                ease: "power2.out",
            });

            gsap.from(".wishlist-cta", {
                scale: 0.95,
                opacity: 0,
                duration: 0.6,
                delay: 0.5,
                ease: "back.out(1.7)",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="max-w-4xl mx-auto py-14 px-6">
            {/* Back to Home link */}
            <button
                onClick={() => navigate("/")}
                className="mb-6 text-blue-600 hover:underline text-lg font-medium wishlist-back"
            >
                ← Back to Home
            </button>

            <div className="bg-white shadow-md rounded-xl p-8 text-center wishlist-card">
                <div className="flex justify-center mb-4">
                    <Heart className="w-10 h-10 text-[#FF4D67]" />
                </div>
                <h2 className="text-2xl font-bold text-[#1A4D2E] mb-2">My Wishlist</h2>
                <p className="text-gray-600 mb-6">
                    You haven’t added anything to your wishlist yet.
                </p>

                <Link
                    to="/"
                    className="inline-block bg-[#FF9F29] text-white px-6 py-2 rounded hover:bg-[#e18e25] transition wishlist-cta"
                >
                    Explore Products
                </Link>
            </div>
        </div>
    );
};

export default Wishlist;
