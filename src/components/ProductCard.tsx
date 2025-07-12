import React from "react";
import type { Product } from "../types";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-200"
        >
            <img
                src={product.image}
                alt={product.title}
                className="h-48 mx-auto object-contain mb-4"
            />

            <h2 className="text-sm font-semibold line-clamp-2 mb-2">{product.title}</h2>

            <div className="flex items-center justify-between text-sm">
                <span className="font-bold text-blue-600">${product.price}</span>
                <span className="text-yellow-500">⭐ {product.rating.rate}</span>
            </div>
        </div>
    );
};

export default ProductCard;
