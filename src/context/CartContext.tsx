import React, { createContext, useContext, useState } from "react";
import type {ReactNode} from 'react'
import type { Product } from "../types";
import { toast } from "react-toastify";


interface CartContextType {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   // const [cartItems, setCartItems] = useState<Product[]>([]);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);


  

    // const addToCart = (product: Product) => {
    //     const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    //     // 🚫 Stop right here if total is already 10 or more
    //     if (totalItems >= 10) {
    //         toast.error("🚫 Your cart has reached the maximum limit (10 items)", {
    //             position: "top-right",
    //             autoClose: 3000,
    //             theme: "colored",
    //         });
    //         return;
    //     }

    //     const existingItem = cartItems.find((item) => item.id === product.id);

    //     // 🟢 If item exists, just increase quantity
    //     if (existingItem) {
    //         // ✅ Also check: if increasing it will exceed 10
    //         if (totalItems + 1 > 10) {
    //             toast.error("🚫 Adding this item exceeds the cart limit (10 items)", {
    //                 position: "top-right",
    //                 autoClose: 3000,
    //                 theme: "colored",
    //             });
    //             return;
    //         }

    //         setCartItems((prev) =>
    //             prev.map((item) =>
    //                 item.id === product.id
    //                     ? { ...item, quantity: item.quantity + 1 }
    //                     : item
    //             )
    //         );
    //     } else {
    //         setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    //     }

    //     // ✅ Show success toast only after valid add
    //     toast.success("✅ Item added to cart", {
    //         position: "top-right",
    //         autoClose: 2000,
    //         theme: "colored",
    //     });
    // };
    const addToCart = (product: Product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);

        // Calculate current total quantity
        const currentTotal = cartItems.reduce((sum, item) => sum + item.quantity, 0);

        // 🚫 Check: already 10 items in cart?
        if (currentTotal >= 10) {
            toast.error("🚫 Your cart has reached the maximum limit (10 items)", {
                position: "top-right",
                autoClose: 3000,
                theme: "colored",
            });
            return; // Stop right here – no changes to cart
        }

        // 🧠 Clone current cart to safely modify
        let updatedCart = [...cartItems];

        if (existingItem) {
            // Find the index
            const index = updatedCart.findIndex((item) => item.id === product.id);

            // 🧮 Check if adding 1 more exceeds 10
            if (currentTotal + 1 > 10) {
                toast.error("🚫 Adding this item exceeds the cart limit (10 items)", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "colored",
                });
                return;
            }

            updatedCart[index] = {
                ...updatedCart[index],
                quantity: updatedCart[index].quantity + 1,
            };
        } else {
            // New item: check if total will exceed 10
            if (currentTotal + 1 > 10) {
                toast.error("🚫 Adding this item exceeds the cart limit (10 items)", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "colored",
                });
                return;
            }

            updatedCart.push({ ...product, quantity: 1 });
        }

        // ✅ All checks passed, update cart
        setCartItems(updatedCart);

        // ✅ Show success only if product was actually added
        toast.success("✅ Item added to cart", {
            position: "top-right",
            autoClose: 2000,
            theme: "colored",
        });
    };
      
      

    const removeFromCart = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
   
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
