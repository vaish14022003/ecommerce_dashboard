
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import type { Product } from "../types";
import { getAllProducts, getProductsByCategory } from "../services/api";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import CategoriesBar from "../components/CategoriesBar";
import AdvertisementSlider from "../components/AdvertisementSlider";


const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const fetchProducts = async (category: string = "") => {
        setLoading(true);
        try {
            const res = category
                ? await getProductsByCategory(category.toLowerCase())
                : await getAllProducts();

            setProducts(res.data);
            setFilteredProducts(res.data);
            setCurrentPage(1); // ✅ reset to page 1 when category changes
        } catch (error) {
            console.error("Failed to fetch products", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryChange = (category: string) => {
        fetchProducts(category);
    };

    const handleSearchChange = (searchTerm: string) => {
        console.log(searchTerm);
        // const filtered = products.filter((product) =>
        //     product.title.toLowerCase().includes(searchTerm.toLowerCase())
        // );
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    
        console.log(filtered);
        setFilteredProducts(filtered);
        setCurrentPage(1); // ✅ reset to page 1 when search term changes
    };

    useEffect(() => {
        fetchProducts(); // Fetch all products on mount
    }, []);

    return (
        <div>
            {/* Header with search and category filtering */}
            <Header
                showCategory={true}
                onSearchChange={handleSearchChange}
                //onCategoryChange={handleCategoryChange}
            />

            {/* CategoriesBar triggers filter by category */}
            <CategoriesBar onCategorySelect={handleCategoryChange} />
            
            <AdvertisementSlider />

            {/* Product Grid */}
            <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {loading ? (
                    <div className="col-span-full">
                        <Loader />
                    </div>
                ) : filteredProducts.length > 0 ? (
                    filteredProducts
                        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                        .map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">
                        No products found.
                    </p>
                )}
            </main>

            {/* Pagination */}
            {!loading && totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Prev
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-3 py-1 rounded ${page === currentPage
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700"
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
};

export default Home;
