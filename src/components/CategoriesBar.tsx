
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import electronicsImg from "../assets/electronics.jpg";
import jewelleriesImg from "../assets/jewelleries.jpg";
import fashionImg from "../assets/fashion.jpg";
import MenImg from "../assets/men.jpg";

interface CategoriesBarProps {
    onCategorySelect: (category: string) => void;
}

const categories = [
    { label: "Electronics", apiValue: "electronics", image: electronicsImg },
    { label: "Jewellery", apiValue: "jewelery", image: jewelleriesImg },
    { label: "Women's Clothing", apiValue: "women's clothing", image: fashionImg },
    { label: "Men's Clothing", apiValue: "men's clothing", image: MenImg },
];

const CategoriesBar: React.FC<CategoriesBarProps> = ({ onCategorySelect }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Animate the whole bar
        gsap.fromTo(
            containerRef.current,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
        );

        // Animate each item with a stagger
        gsap.fromTo(
            itemRefs.current,
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.15,
                delay: 0.3,
            }
        );
    }, []);

    return (
        <div
            ref={containerRef}
            className="bg-white py-6 shadow-sm border-b-gray-100 sticky top-[72px] z-30"
        >
            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-24 px-4">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        ref={(el) => (itemRefs.current[idx] = el)}
                        className="flex flex-col items-center w-28 hover:scale-105 transition-transform cursor-pointer"
                        onClick={() => onCategorySelect(cat.apiValue)}
                    >
                        <img
                            src={cat.image}
                            alt={cat.label}
                            className="w-25 h-25 object-cover rounded-full border border-gray-300"
                        />
                        <span className="text-md font-medium text-gray-700 text-center mt-2">
                            {cat.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesBar;
