// src/services/api.ts
import axios from "axios";
import type { Product } from "../types";

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = () => axios.get<Product[]>(`${BASE_URL}/products`);

export const getProductById = (id: string) =>
    axios.get<Product>(`${BASE_URL}/products/${id}`);

export const getAllCategories = () =>
    axios.get<string[]>(`${BASE_URL}/products/categories`);

export const getProductsByCategory = (category: string) =>
    axios.get<Product[]>(`${BASE_URL}/products/category/${category}`);
