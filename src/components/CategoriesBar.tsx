

import React from "react";
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
    return (
        <div className="bg-white py-6 shadow-sm border-b-gray-100 sticky top-[72px] z-30">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-24 px-4">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
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
