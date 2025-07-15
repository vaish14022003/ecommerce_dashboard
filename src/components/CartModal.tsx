
import React from "react";
import Modal from "react-modal";
import { useCart } from "../context/CartContext";
//import { X } from "lucide-react";
import { toast } from "react-toastify";
import emptyCartAnimation from "../assets/cart.json";
import Lottie from "lottie-react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
}

Modal.setAppElement("#root");  

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
    const { cartItems, addToCart, removeFromCart , clearCart, decreaseQuantity } = useCart();

    const total = cartItems
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2);

    const navigate = useNavigate();

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Cart"
            className="w-full min-h-screen bg-white overflow-y-auto relative"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
        >
            
            <Header showCategory={false} onSearchChange={() => { }} />

            {/* Breadcrumb */}
            <div className="mb-4 text-sm text-[#1A4D2E] px-2">
                <nav className="flex gap-2 items-center">
                    <button
                        onClick={() => {
                            onClose();
                            navigate("/");
                        }}
                        className="hover:underline hover:text-[#FF9F29]"
                    >
                        Home
                    </button>
                    <span>/</span>
                    <span className="text-gray-600 font-medium">Cart</span>
                </nav>
            </div>

            <div className="p-6 max-w-5xl mx-auto">
                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center mt-20">
                        <div className="w-60 h-60">
                            <Lottie animationData={emptyCartAnimation} loop={true} />
                        </div>
                        <p className="text-gray-500 text-xl mt-4">Your cart is empty.</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col md:flex-row items-center justify-between border-b pb-4"
                            >
                                {/* Product Info Left */}
                                <div className="flex items-center gap-4 w-full md:w-2/3">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-24 h-24 object-contain bg-gray-100 rounded p-2"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-800">{item.title}</p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            ${item.price} × {item.quantity} ={" "}
                                            <span className="font-medium text-black">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* Actions Right */}
                                <div className="mt-4 md:mt-0 md:w-1/3 flex flex-col items-end gap-2">
                                    {/* Remove Button */}
                                    {/* <button
                                        onClick={() => {
                                            removeFromCart(item.id);
                                            toast.error("🗑️ Item removed from cart", {
                                                position: "top-right",
                                                autoClose: 2000,
                                                theme: "colored",
                                            });
                                        }}
                                        className="text-red-600 text-sm font-medium hover:underline"
                                    >
                                        Remove
                                    </button> */}

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => decreaseQuantity(item.id)}
                                            // onClick={() => removeFromCart(item.id)}
                                            className="w-8 h-8 bg-gray-200 rounded text-lg font-bold hover:bg-gray-300"
                                        >
                                            −
                                        </button>
                                        <span className="w-6 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => addToCart(item)}
                                            className="w-8 h-8 bg-gray-200 rounded text-lg font-bold hover:bg-gray-300"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Total & Actions */}
                        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-4">
                            <div className="text-xl font-semibold text-gray-800">
                                Total: <span className="text-[#1A4D2E]">${total}</span>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={clearCart}
                                    className="px-5 py-2 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200"
                                >
                                    Clear Cart
                                </button>
                                <button
                                    onClick={onClose}
                                    className="px-5 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </Modal>
    );
};

export default CartModal;



//BreadCrumb as a reusable component:--

// src/components/CartModal.tsx

// import React from "react";
// import Modal from "react-modal";
// import { useCart } from "../context/CartContext";
// import { toast } from "react-toastify";
// import emptyCartAnimation from "../assets/cart.json";
// import Lottie from "lottie-react";
// import Header from "./Header";
// import { Link, useNavigate } from "react-router-dom";
// import Footer from "./Footer";
// import Breadcrumb from "./Breadcrumb"; // Import the new component

// interface CartModalProps {
//     isOpen: boolean;
//     onClose: () => void;
// }

// Modal.setAppElement("#root");

// const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
//     const { cartItems, addToCart, removeFromCart, clearCart, decreaseQuantity } = useCart();
//     const total = cartItems
//         .reduce((sum, item) => sum + item.price * item.quantity, 0)
//         .toFixed(2);
//     const navigate = useNavigate();

//     // Define the breadcrumb items for the cart page
//     const breadcrumbItems = [
//         { label: 'Home', path: '/' },
//         { label: 'Cart' }, // The last item has no path
//     ];
// const handleHomeClick = () => {
//     onClose(); // First, close the modal
//     navigate('/'); // Then, navigate to the home page
// };

//     return (
//         <Modal
//             isOpen={isOpen}
//             onRequestClose={onClose}
//             contentLabel="Cart"
//             className="w-full min-h-screen bg-white overflow-y-auto relative"
//             overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
//         >
//             <Header showCategory={false} onSearchChange={() => { }} />

//             {/* ✅ Use the reusable Breadcrumb component */}
//             <div className="mb-4 text-sm text-[#1A4D2E] px-2">
//                 <Breadcrumb items={breadcrumbItems} />
//             </div>

//             <div className="p-6 max-w-5xl mx-auto">
//                 {cartItems.length === 0 ? (
//                     <div className="flex flex-col items-center justify-center mt-20">
//                         <div className="w-60 h-60">
//                             <Lottie animationData={emptyCartAnimation} loop={true} />
//                         </div>
//                         <p className="text-gray-500 text-xl mt-4">Your cart is empty.</p>
//                     </div>
//                 ) : (
//                     <div className="space-y-6">
//                         {cartItems.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className="flex flex-col md:flex-row items-center justify-between border-b pb-4"
//                             >
//                                 {/* Product Info Left */}
//                                 <div className="flex items-center gap-4 w-full md:w-2/3">
//                                     <img
//                                         src={item.image}
//                                         alt={item.title}
//                                         className="w-24 h-24 object-contain bg-gray-100 rounded p-2"
//                                     />
//                                     <div>
//                                         <p className="font-semibold text-gray-800">{item.title}</p>
//                                         <p className="text-sm text-gray-500 mt-1">
//                                             ${item.price} × {item.quantity} ={" "}
//                                             <span className="font-medium text-black">
//                                                 {(item.price * item.quantity).toFixed(2)}
//                                             </span>
//                                         </p>
//                                     </div>
//                                 </div>

//                                 {/* Actions Right */}
//                                 <div className="mt-4 md:mt-0 md:w-1/3 flex flex-col items-end gap-2">
//                                     <div className="flex items-center gap-2">
//                                         <button
//                                             onClick={() => decreaseQuantity(item.id)}
//                                             className="w-8 h-8 bg-gray-200 rounded text-lg font-bold hover:bg-gray-300"
//                                         >
//                                             −
//                                         </button>
//                                         <span className="w-6 text-center">{item.quantity}</span>
//                                         <button
//                                             onClick={() => addToCart(item)}
//                                             className="w-8 h-8 bg-gray-200 rounded text-lg font-bold hover:bg-gray-300"
//                                         >
//                                             +
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                         <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-4">
//                             <div className="text-xl font-semibold text-gray-800">
//                                 Total: <span className="text-[#1A4D2E]">${total}</span>
//                             </div>
//                             <div className="flex gap-3">
//                                 <button
//                                     onClick={clearCart}
//                                     className="px-5 py-2 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200"
//                                 >
//                                     Clear Cart
//                                 </button>
//                                 <button
//                                     onClick={onClose}
//                                     className="px-5 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
//                                 >
//                                     Continue Shopping
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>

//             <Footer />
//         </Modal>
//     );
// };

// export default CartModal;