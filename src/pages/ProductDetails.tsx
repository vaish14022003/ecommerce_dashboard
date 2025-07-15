
// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getProductById } from "../services/api";
// import type { Product } from "../types";
// import { useCart } from "../context/CartContext";
// import Header from "../components/Header";

// const ProductDetails: React.FC = () => {
//     const { id } = useParams<{ id: string }>();
//     const [product, setProduct] = useState<Product | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const { addToCart } = useCart();

//     useEffect(() => {
//         if (id) {
//             setLoading(true);
//             getProductById(id)
//                 .then((res) => setProduct(res.data))
//                 .catch((err) => console.error("Error fetching product", err))
//                 .finally(() => setLoading(false));
//         }
//     }, [id]);

//     return (
//         <>
//             {/* ✅ Header without category */}
//             {/* <Header showCategory={false} onSearchChange={() => { }} onCategoryChange={() => { }} /> */}

//             {/* ✅ Breadcrumb */}
//             <div className="max-w-6xl mx-auto px-6 pt-4 text-sm text-[#1A4D2E]">
//                 <nav className="flex gap-2 items-center">
//                     <Link to="/" className="hover:underline hover:text-[#FF9F29]">
//                         Home
//                     </Link>
//                     <span>/</span>
//                     <Link to="/" className="hover:underline hover:text-[#FF9F29]">
//                         Products
//                     </Link>
//                     <span>/</span>
//                     <span className="font-medium text-gray-500 truncate max-w-[150px]">
//                         {loading ? "Loading..." : product?.title || "Unknown Product"}
//                     </span>
//                 </nav>
//             </div>

//             {loading ? (
//                 <p className="text-center p-6 text-lg text-[#1A4D2E] font-semibold animate-pulse">
//                     Loading product...
//                 </p>
//             ) : !product ? (
//                 <p className="text-center p-6 text-red-500 text-lg font-medium">
//                     Product not found.
//                 </p>
//             ) : (
//                 <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-10 bg-white shadow-md rounded-lg mt-6">
//                     {/* Product Image */}
//                     <div className="flex justify-center items-center">
//                         <img
//                             src={product.image}
//                             alt={product.title}
//                             className="w-full h-96 object-contain rounded"
//                         />
//                     </div>

//                     {/* Product Info */}
//                     <div className="space-y-5">
//                         <h1 className="text-3xl font-bold text-[#1A4D2E]">{product.title}</h1>

//                         <div className="text-yellow-500 font-semibold text-sm">
//                             ⭐ {product.rating.rate} ({product.rating.count} reviews)
//                         </div>

//                         <p className="text-gray-600">{product.description}</p>

//                         <p className="text-2xl font-bold text-[#FF9F29]">${product.price}</p>

//                         <button
//                             onClick={() => addToCart(product)}
//                             className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
//                         >
//                             Add to Cart
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default ProductDetails;




// // useEffect(() => {
// //     const fetchProduct = async () => {
// //         if (!id) return;

// //         try {
// //             setLoading(true);
// //             const res = await getProductById(id);
// //             setProduct(res.data);
// //         } catch (err) {
// //             console.error("Error fetching product", err);
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     fetchProduct();
// // }, [id]);


//With Breadcrumbs as a reusable component:--

// src/pages/ProductDetails.tsx

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../services/api";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";
import Breadcrumb from "../components/Breadcrumb"; // Import the new component
import Header from "../components/Header";

const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const { addToCart } = useCart();

    useEffect(() => {
        if (id) {
            setLoading(true);
            getProductById(id)
                .then((res) => setProduct(res.data))
                .catch((err) => console.error("Error fetching product", err))
                .finally(() => setLoading(false));
        }
    }, [id]);

    // Define the breadcrumb items based on the current data
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Products', path: '/' },
        { label: loading ? 'Loading...' : product?.title || 'Unknown Product' },
    ];

    return (
        <>
            {/* ✅ Use the reusable Breadcrumb component */}
            <Breadcrumb items={breadcrumbItems} />

            {loading ? (
                <p className="text-center p-6 text-lg text-[#1A4D2E] font-semibold animate-pulse">
                    Loading product...
                </p>
            ) : !product ? (
                <p className="text-center p-6 text-red-500 text-lg font-medium">
                    Product not found.
                </p>
            ) : (
                <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-10 bg-white shadow-md rounded-lg mt-6">
                    {/* Product Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-96 object-contain rounded"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-5">
                        <h1 className="text-3xl font-bold text-[#1A4D2E]">{product.title}</h1>

                        <div className="text-yellow-500 font-semibold text-sm">
                            ⭐ {product.rating.rate} ({product.rating.count} reviews)
                        </div>

                        <p className="text-gray-600">{product.description}</p>

                        <p className="text-2xl font-bold text-[#FF9F29]">${product.price}</p>

                        <button
                            onClick={() => addToCart(product)}
                            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetails;