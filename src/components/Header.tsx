
// import React, { useEffect, useState } from "react";
// import {
//     ShoppingCart,
//     UserCircle2,
//     ChevronDown,
//     ListFilter,
// } from "lucide-react";
// import { useCart } from "../context/CartContext";
// import CartModal from "./CartModal";
// import PrimePickLogo from "../assets/PrimePick-logo-transparent.jpg";
// import { getAllCategories } from "../services/api";

// interface HeaderProps {
//     onSearchChange: (searchTerm: string) => void;
//     onCategoryChange?: (category: string) => void;
//     showCategory?: boolean;
// }

// const Header: React.FC<HeaderProps> = ({
//     onSearchChange,
//     onCategoryChange,
//     showCategory = true,
// }) => {
//     const [search, setSearch] = useState<string>("");
//     const { cartItems } = useCart();
//     const [isCartOpen, setIsCartOpen] = useState(false);
//     const [isProfileOpen, setIsProfileOpen] = useState(false);
//     const [isCategoryOpen, setIsCategoryOpen] = useState(false);
//     const [categories, setCategories] = useState<string[]>([]);

//     useEffect(() => {
//         if (showCategory) {
//             getAllCategories()
//                 .then((res) => setCategories(res.data))
//                 .catch((err) => console.error("Error fetching categories:", err));
//         }
//     }, [showCategory]);

//     const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value;
//         setSearch(value);
//         onSearchChange(value);
//     };

//     const handleCategoryChange = (category: string) => {
//         if (onCategoryChange) {
//             onCategoryChange(category);
//         }
//         setIsCategoryOpen(false);
//     };

//     return (
//         <header className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 bg-[#f8fafc] border-b border-gray-200 sticky top-0 z-50 shadow-sm">
//             {/* Logo & Name */}
//             <div className="flex items-center gap-2">
//                 <img
//                     src={PrimePickLogo}
//                     alt="PrimePick Logo"
//                     className="w-14 h-14 rounded-full object-cover"
//                 />
//                 <h1 className="text-2xl font-extrabold text-[#1A4D2E] tracking-wide">
//                     Prime<span className="text-[#FF9F29]">Pick</span>
//                 </h1>
//             </div>

//             {/* Search */}
//             <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={search}
//                 onChange={handleSearchChange}
//                 className="px-4 py-2 border border-gray-300 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />

//             {/* Right Controls */}
//             <div className="flex items-center gap-6 relative">
//                 {/* Categories (Only if shown) */}
//                 {showCategory && (
//                     <div
//                         className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
//                         onClick={() => setIsCategoryOpen((prev) => !prev)}
//                     >
//                         {/* <ListFilter className="w-5 h-5 text-gray-700" /> */}
//                         {/* <p className="text-md font-medium">Categories</p> */}
//                     </div>
//                 )}

//                 {showCategory && isCategoryOpen && (
//                     <div className="absolute right-40 top-12 w-48 bg-white border rounded shadow z-50">
//                         <button
//                             onClick={() => handleCategoryChange("")}
//                             className="w-full px-4 py-2 text-left text-md hover:bg-gray-100"
//                         >
//                             All Categories
//                         </button>
//                         {categories.map((cat) => (
//                             <button
//                                 key={cat}
//                                 onClick={() => handleCategoryChange(cat)}
//                                 className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
//                             >
//                                 {cat.charAt(0).toUpperCase() + cat.slice(1)}
//                             </button>
//                         ))}
//                     </div>
//                 )}

//                 {/* Cart */}
//                 <div
//                     className="relative flex items-center gap-1 cursor-pointer hover:text-blue-600"
//                     onClick={() => setIsCartOpen(true)}
//                 >
//                     <ShoppingCart className="w-5 h-5 text-gray-700" />
//                     <p className="text-md font-medium">Cart</p>
//                     {cartItems.length > 0 && (
//                         <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold px-1.5 rounded-full">
//                             {cartItems.length}
//                         </span>
//                     )}
//                 </div>

//                 {/* Account */}
//                 <div className="relative">
//                     <div
//                         onClick={() => setIsProfileOpen((prev) => !prev)}
//                         className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
//                     >
//                         <UserCircle2 className="w-5 h-5 text-gray-700" />
//                         <ChevronDown className="w-4 h-4 text-gray-700" />
//                         <p className="text-md font-medium">Account</p>
//                     </div>

//                     {/* {isProfileOpen && (
//                         <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-50">
//                             <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
//                                 👤 User Info
//                             </button>
//                             <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
//                                 ⚙️ Settings
//                             </button>
//                             <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500">
//                                 🚪 Logout
//                             </button>
//                         </div>
//                     )} */}
//                     {isProfileOpen && (
//                         <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow z-50">
//                             <a
//                                 href="/user"
//                                 className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
//                             >
//                                 👤 User Info
//                             </a>
//                             <a
//                                 href="/settings"
//                                 className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
//                             >
//                                 ⚙️ Settings
//                             </a>
//                             <a
//                                 href="/wishlist"
//                                 className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
//                             >
//                                 ❤️ Wishlist
//                             </a>
//                             <button
//                                 onClick={() => {
//                                     // Add logout logic here
//                                     console.log("Logging out...");
//                                 }}
//                                 className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500"
//                             >
//                                 🚪 Logout
//                             </button>
//                         </div>
//                     )}

//                 </div>

//                 {/* Cart Modal */}
//                 <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
//             </div>
//         </header>
//     );
// };

// export default Header;
// import React, { useEffect, useState } from "react";
// import {
//     ShoppingCart,
//     UserCircle2,
//     ChevronDown,
// } from "lucide-react";
// import { useCart } from "../context/CartContext";
// import { useAuth } from "../context/AuthContext";
// import { Link, useNavigate } from "react-router-dom";
// import CartModal from "./CartModal";
// import PrimePickLogo from "../assets/PrimePick-logo-transparent.jpg";
// import { getAllCategories } from "../services/api";

// interface HeaderProps {
//     onSearchChange: (searchTerm: string) => void;
//     onCategoryChange?: (category: string) => void;
//     showCategory?: boolean;
// }

// const Header: React.FC<HeaderProps> = ({
//     onSearchChange,
//     onCategoryChange,
//     showCategory = true,
// }) => {
//     const [search, setSearch] = useState<string>("");
//     const { cartItems } = useCart();
//     const [isCartOpen, setIsCartOpen] = useState(false);
//     const [isProfileOpen, setIsProfileOpen] = useState(false);
//     const [isCategoryOpen, setIsCategoryOpen] = useState(false);
//     const [categories, setCategories] = useState<string[]>([]);

//     const { logout } = useAuth();
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (showCategory) {
//             getAllCategories()
//                 .then((res) => setCategories(res.data))
//                 .catch((err) => console.error("Error fetching categories:", err));
//         }
//     }, [showCategory]);

//     const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value;
//         setSearch(value);
//         onSearchChange(value);
//     };

//     const handleCategoryChange = (category: string) => {
//         if (onCategoryChange) {
//             onCategoryChange(category);
//         }
//         setIsCategoryOpen(false);
//     };

//     return (
//         <header className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 bg-[#f8fafc] border-b border-gray-200 sticky top-0 z-50 shadow-sm">
//             {/* Logo & Name */}
//             <div className="flex items-center gap-2">
//                 <img
//                     src={PrimePickLogo}
//                     alt="PrimePick Logo"
//                     className="w-14 h-14 rounded-full object-cover"
//                 />
//                 <h1 className="text-2xl font-extrabold text-[#1A4D2E] tracking-wide">
//                     Prime<span className="text-[#FF9F29]">Pick</span>
//                 </h1>
//             </div>

//             {/* Search */}
//             <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={search}
//                 onChange={handleSearchChange}
//                 className="px-4 py-2 border border-gray-300 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />

//             {/* Right Controls */}
//             <div className="flex items-center gap-6 relative">
//                 {/* Cart */}
//                 <div
//                     className="relative flex items-center gap-1 cursor-pointer hover:text-blue-600"
//                     onClick={() => setIsCartOpen(true)}
//                 >
//                     <ShoppingCart className="w-5 h-5 text-gray-700" />
//                     <p className="text-md font-medium">Cart</p>
//                     {cartItems.length > 0 && (
//                         <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold px-1.5 rounded-full">
//                             {cartItems.length}
//                         </span>
//                     )}
//                 </div>

//                 {/* Account */}
//                 <div className="relative">
//                     <div
//                         onClick={() => setIsProfileOpen((prev) => !prev)}
//                         className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
//                     >
//                         <UserCircle2 className="w-5 h-5 text-gray-700" />
//                         <ChevronDown className="w-4 h-4 text-gray-700" />
//                         <p className="text-md font-medium">Account</p>
//                     </div>

//                     {isProfileOpen && (
//                         <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow z-50">
//                             <Link
//                                 to="/user"
//                                 className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
//                             >
//                                 👤 User Info
//                             </Link>
//                             <Link
//                                 to="/settings"
//                                 className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
//                             >
//                                 ⚙️ Settings
//                             </Link>
//                             <Link
//                                 to="/wishlist"
//                                 className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
//                             >
//                                 ❤️ Wishlist
//                             </Link>
//                             <Link
//                                 to="/deliveryStatus"
//                                 className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
//                             >
//                                 🚚 Delivery Status
//                             </Link>
//                             <button
//                                 onClick={() => {
//                                     logout();
//                                     navigate("/login");
//                                 }}
//                                 className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500"
//                             >
//                                 🚪 Logout
//                             </button>
//                         </div>
//                     )}
//                 </div>

//                 {/* Cart Modal */}
//                 <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
//             </div>
//         </header>
//     );
// };

// export default Header;
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
    ShoppingCart,
    UserCircle2,
    ChevronDown,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import CartModal from "./CartModal";
import PrimePickLogo from "../assets/PrimePick-logo-transparent.jpg";
import { getAllCategories } from "../services/api";

interface HeaderProps {
    onSearchChange: (searchTerm: string) => void;
    onCategoryChange?: (category: string) => void;
    showCategory?: boolean;
}

const Header: React.FC<HeaderProps> = ({
    onSearchChange,
    onCategoryChange,
    showCategory = true,
}) => {
    const [search, setSearch] = useState<string>("");
    const { cartItems } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [categories, setCategories] = useState<string[]>([]);

    const { logout } = useAuth();
    const navigate = useNavigate();

    // Refs for animation targets
    const logoRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);
    const controlsRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (showCategory) {
            getAllCategories()
                .then((res) => setCategories(res.data))
                .catch((err) => console.error("Error fetching categories:", err));
        }
    }, [showCategory]);

    useEffect(() => {
        gsap.fromTo(
            logoRef.current,
            { x: -30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
        );

        gsap.fromTo(
            searchRef.current,
            { y: -10, opacity: 0 },
            { y: 0, opacity: 1, delay: 0.2, duration: 0.6, ease: "power2.out" }
        );

        gsap.fromTo(
            controlsRef.current,
            { x: 30, opacity: 0 },
            { x: 0, opacity: 1, delay: 0.4, duration: 0.6, ease: "power2.out" }
        );
    }, []);

    useEffect(() => {
        if (isProfileOpen && dropdownRef.current) {
            gsap.fromTo(
                dropdownRef.current,
                { y: -10, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3, ease: "power1.out" }
            );
        }
    }, [isProfileOpen]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
        onSearchChange(value);
    };

    const handleCategoryChange = (category: string) => {
        if (onCategoryChange) {
            onCategoryChange(category);
        }
        setIsCategoryOpen(false);
    };

    return (
        <header className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 bg-[#f8fafc] border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            {/* Logo & Name */}
            <div className="flex items-center gap-2" ref={logoRef}>
                <img
                    src={PrimePickLogo}
                    alt="PrimePick Logo"
                    className="w-14 h-14 rounded-full object-cover"
                />
                <h1 className="text-2xl font-extrabold text-[#1A4D2E] tracking-wide">
                    Prime<span className="text-[#FF9F29]">Pick</span>
                </h1>
            </div>

            {/* Search */}
            <input
                ref={searchRef}
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={handleSearchChange}
                className="px-4 py-2 border border-gray-300 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Right Controls */}
            <div className="flex items-center gap-6 relative" ref={controlsRef}>
                {/* Cart */}
                <div
                    className="relative flex items-center gap-1 cursor-pointer hover:text-blue-600"
                    onClick={() => setIsCartOpen(true)}
                >
                    <ShoppingCart className="w-5 h-5 text-gray-700" />
                    <p className="text-md font-medium">Cart</p>
                    {cartItems.length > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold px-1.5 rounded-full">
                            {cartItems.length}
                        </span>
                    )}
                </div>

                {/* Account */}
                <div className="relative">
                    <div
                        onClick={() => setIsProfileOpen((prev) => !prev)}
                        className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
                    >
                        <UserCircle2 className="w-5 h-5 text-gray-700" />
                        <ChevronDown className="w-4 h-4 text-gray-700" />
                        <p className="text-md font-medium">Account</p>
                    </div>

                    {isProfileOpen && (
                        <div
                            ref={dropdownRef}
                            className="absolute right-0 mt-2 w-44 bg-white border rounded shadow z-50"
                        >
                            <Link to="/user" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                                👤 User Info
                            </Link>
                            <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                                ⚙️ Settings
                            </Link>
                            <Link to="/wishlist" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                                ❤️ Wishlist
                            </Link>
                            <Link to="/deliveryStatus" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                                🚚 Delivery Status
                            </Link>
                            <button
                                onClick={() => {
                                    logout();
                                    navigate("/login");
                                }}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500"
                            >
                                🚪 Logout
                            </button>
                        </div>
                    )}
                </div>

                {/* Cart Modal */}
                <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            </div>
        </header>
    );
};

export default Header;
