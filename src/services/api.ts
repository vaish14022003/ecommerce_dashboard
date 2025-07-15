// // src/services/api.ts
// import axios from "axios";
// import type { Product } from "../types";

// const BASE_URL = "https://fakestoreapi.com";

// export const getAllProducts = () => axios.get<Product[]>(`${BASE_URL}/products`);

// export const getProductById = (id: string) =>
//     axios.get<Product>(`${BASE_URL}/products/${id}`);

// //export const getAllCategories = () =>
//   //  axios.get<string[]>(`${BASE_URL}/products/categories`);

// export const getProductsByCategory = (category: string) =>
//     axios.get<Product[]>(`${BASE_URL}/products/category/${category}`);
// src/services/api.ts
import axios from "axios";
import type { Product } from "../types";
import { toast } from "react-toastify";

const BASE_URL = "https://fakestoreapi.com";
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // in ms

// Generic retry utility
async function fetchWithRetry<T>(
    fetchFn: () => Promise<{ data: T }>,
    retries = MAX_RETRIES
): Promise<{ data: T }> {
    try {
        return await fetchFn();
    } catch (error) {
        if (retries > 0) {
            await new Promise((res) =>
                setTimeout(res, RETRY_DELAY * (MAX_RETRIES - retries + 1)) // exponential backoff
            );
            return fetchWithRetry(fetchFn, retries - 1);
        } else {
            console.error("API error:", error);
            toast.error("❌ Something went wrong. Please try again.", {
                position: "top-right",
                autoClose: 3000,
                theme: "colored",
            });
            throw error;
        }
    }
}

// API functions using retry logic
export const getAllProducts = () =>
    fetchWithRetry<Product[]>(() => axios.get(`${BASE_URL}/products`));

export const getProductById = (id: string) =>
    fetchWithRetry<Product>(() => axios.get(`${BASE_URL}/products/${id}`));

// export const getAllCategories = () =>
//     fetchWithRetry<string[]>(() => axios.get(`${BASE_URL}/products/categories`));

export const getProductsByCategory = (category: string) =>
    fetchWithRetry<Product[]>(() => axios.get(`${BASE_URL}/products/category/${category}`));
