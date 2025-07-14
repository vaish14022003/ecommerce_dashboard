// import React, { createContext, useContext, useState } from "react";
// import type {ReactNode} from 'react'
// import type { Product } from "../types";
// import { toast } from "react-toastify";


// interface CartContextType {
//     cartItems: Product[];
//     addToCart: (product: Product) => void;
//     removeFromCart: (id: number) => void;
//     clearCart: () => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//    // const [cartItems, setCartItems] = useState<Product[]>([]);
//     const [cartItems, setCartItems] = useState<CartItem[]>([]);


  

    
//     const addToCart = (product: Product) => {
//         const existingItem = cartItems.find((item) => item.id === product.id);

//         // Calculate current total quantity
//         const currentTotal = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//         // 🚫 Check: already 10 items in cart?
//         if (currentTotal >= 10) {
//             toast.error("🚫 Your cart has reached the maximum limit (10 items)", {
//                 position: "top-right",
//                 autoClose: 3000,
//                 theme: "colored",
//             });
//             return; // Stop right here – no changes to cart
//         }

//         // 🧠 Clone current cart to safely modify
//         let updatedCart = [...cartItems];

//         if (existingItem) {
//             // Find the index
//             const index = updatedCart.findIndex((item) => item.id === product.id);

//             // 🧮 Check if adding 1 more exceeds 10
//             if (currentTotal + 1 > 10) {
//                 toast.error("🚫 Adding this item exceeds the cart limit (10 items)", {
//                     position: "top-right",
//                     autoClose: 3000,
//                     theme: "colored",
//                 });
//                 return;
//             }

//             updatedCart[index] = {
//                 ...updatedCart[index],
//                 quantity: updatedCart[index].quantity + 1,
//             };
//         } else {
//             // New item: check if total will exceed 10
//             if (currentTotal + 1 > 10) {
//                 toast.error("🚫 Adding this item exceeds the cart limit (10 items)", {
//                     position: "top-right",
//                     autoClose: 3000,
//                     theme: "colored",
//                 });
//                 return;
//             }

//             updatedCart.push({ ...product, quantity: 1 });
//         }

//         // ✅ All checks passed, update cart
//         setCartItems(updatedCart);

//         // ✅ Show success only if product was actually added
//         toast.success("✅ Item added to cart", {
//             position: "top-right",
//             autoClose: 2000,
//             theme: "colored",
//         });
//     };
      
      

//     const removeFromCart = (id: number) => {
//         setCartItems((prev) => prev.filter((item) => item.id !== id));
//     };

//     const clearCart = () => setCartItems([]);

//     return (
//         <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
//             {children}
//         </CartContext.Provider>
//     );
   
// };

// export const useCart = (): CartContextType => {
//     const context = useContext(CartContext);
//     if (!context) {
//         throw new Error("useCart must be used within a CartProvider");
//     }
//     return context;
// };
import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from 'react';
import type { Product } from "../types";
import { toast } from "react-toastify";

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    clearCart: () => void;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Load cart from localStorage
    // useEffect(() => {
    //     const savedCart = localStorage.getItem("cartItems");
    //     if (savedCart) {
    //         setCartItems(JSON.parse(savedCart));
    //     }
    // }, []);
    // Load cart from localStorage
    useEffect(() => {
        try {
            const savedCart = localStorage.getItem("cartItems");
            if (savedCart) {
                setCartItems(JSON.parse(savedCart));
            }
        } catch (error) {
            // Handle the error, maybe clear the corrupted data
            console.error("Failed to parse cart data from local storage:", error);
            localStorage.removeItem("cartItems"); // Optional: clear corrupted data
        }
    }, []); // Empty dependency array ensures this runs only once

    // Save cart to localStorage on change
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product: Product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        const currentTotal = cartItems.reduce((sum, item) => sum + item.quantity, 0);

        if (currentTotal >= 10) {
            toast.error("🚫 Your cart has reached the maximum limit (10 items)", {
                position: "top-right",
                autoClose: 3000,
                theme: "colored",
            });
            return;
        }

        let updatedCart = [...cartItems];

        if (existingItem) {
            const index = updatedCart.findIndex((item) => item.id === product.id);

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
            updatedCart.push({ ...product, quantity: 1 });
        }

        setCartItems(updatedCart);
        toast.success("✅ Item added to cart", {
            position: "top-right",
            autoClose: 2000,
            theme: "colored",
        });
    };

    const removeFromCart = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    // const decreaseQuantity = (id: number) => {
    //     setCartItems((prev) => {
    //         return prev.map(item =>
    //             item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    //         ).filter(item => item.quantity > 0);
    //     });
    // };
    const decreaseQuantity = (id: number) => {
        const itemToReduce = cartItems.find(item => item.id === id);

        // Show toast only if quantity is 1 (means item will be removed)
        if (itemToReduce && itemToReduce.quantity === 1) {
            toast.error("🗑️ Item removed from cart", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
            });
        }
       
        // Update state
        setCartItems((prev) =>
            prev
                .map(item =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter(item => item.quantity > 0)
        );
    };
    

    

   


    const clearCart = () => setCartItems([]);

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, decreaseQuantity, clearCart, totalPrice }}
        >
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

