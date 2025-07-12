// // pages/DeliveryStatus.tsx
// import React from "react";
// import { Truck, PackageCheck, MapPin, Clock, CheckCircle } from "lucide-react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { Link } from "react-router-dom";

// const DeliveryStatus: React.FC = () => {
//     const order = {
//         id: "ORD12345678",
//         estimatedDelivery: "July 15, 2025",
//         status: "Out for Delivery",
//         address: "123 Main Street, Ghaziabad, UP 201001",
//         steps: [
//             { label: "Order Placed", completed: true },
//             { label: "Packed", completed: true },
//             { label: "Shipped", completed: true },
//             { label: "Out for Delivery", completed: true },
//             { label: "Delivered", completed: false },
//         ],
//     };

//     return (
//         <div className="flex flex-col min-h-screen">
//             {/* <Header showCategory={false} onSearchChange={() => { }} /> */}

//             <main className="flex-grow max-w-4xl mx-auto px-4 py-10">
//                 <h2 className="text-2xl font-bold text-[#1A4D2E] mb-6 flex items-center gap-2">
//                     <Truck className="w-6 h-6 text-[#FF9F29]" /> Delivery Status
//                 </h2>

//                 <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
//                     <div className="flex flex-col sm:flex-row sm:justify-between">
//                         <div>
//                             <p className="text-gray-600">Order ID</p>
//                             <p className="font-semibold">{order.id}</p>
//                         </div>
//                         <div>
//                             <p className="text-gray-600">Estimated Delivery</p>
//                             <p className="flex items-center gap-1 font-semibold">
//                                 <Clock className="w-4 h-4 text-gray-500" /> {order.estimatedDelivery}
//                             </p>
//                         </div>
//                     </div>

//                     <div>
//                         <p className="text-gray-600 mb-2">Delivery Address</p>
//                         <p className="flex items-center gap-2 text-gray-800">
//                             <MapPin className="w-4 h-4 text-red-500" /> {order.address}
//                         </p>
//                     </div>

//                     <div className="mt-6">
//                         <p className="text-gray-600 mb-4">Tracking Progress</p>
//                         <div className="space-y-4">
//                             {order.steps.map((step, idx) => (
//                                 <div key={idx} className="flex items-center gap-4">
//                                     <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step.completed ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"}`}>
//                                         {step.completed ? <CheckCircle className="w-4 h-4" /> : idx + 1}
//                                     </div>
//                                     <span className={step.completed ? "text-gray-800 font-semibold" : "text-gray-500"}>{step.label}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="text-center mt-8">
//                     <Link
//                         to="/"
//                         className="inline-block text-white bg-[#1A4D2E] px-6 py-2 rounded hover:bg-[#163c25] transition"
//                     >
//                         Back to Home
//                     </Link>
//                 </div>
//             </main>

//             <Footer />
//         </div>
//     );
// };

// export default DeliveryStatus;
// pages/DeliveryStatus.tsx
// pages/DeliveryStatus.tsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Truck, MapPin, Clock, CheckCircle } from "lucide-react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const DeliveryStatus: React.FC = () => {
    const stepsRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        const steps = stepsRef.current?.children;
        const button = buttonRef.current;

        if (card) {
            gsap.fromTo(
                card,
                { autoAlpha: 0, y: 40 }, // start fully hidden
                { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }
            );
        }

        if (steps) {
            gsap.fromTo(
                steps,
                { autoAlpha: 0, y: 20 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.2,
                    delay: 0.3,
                    ease: "power2.out",
                }
            );
        }

        if (button) {
            gsap.fromTo(
                button,
                { autoAlpha: 0, scale: 0.9 },
                {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 0.5,
                    delay: 1.2,
                    ease: "back.out(1.7)",
                }
            );
        }
    }, []);

    const order = {
        id: "ORD12345678",
        estimatedDelivery: "July 15, 2025",
        address: "123 Main Street, Ghaziabad, UP 201001",
        steps: [
            { label: "Order Placed", completed: true },
            { label: "Packed", completed: true },
            { label: "Shipped", completed: true },
            { label: "Out for Delivery", completed: true },
            { label: "Delivered", completed: false },
        ],
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow max-w-4xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold text-[#1A4D2E] mb-6 flex items-center gap-2">
                    <Truck className="w-6 h-6 text-[#FF9F29]" /> Delivery Status
                </h2>

                <div
                    ref={cardRef}
                    className="bg-white rounded-lg shadow-md p-6 space-y-6"
                    style={{ visibility: "hidden" }} // Ensures GSAP manages visibility
                >
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div>
                            <p className="text-gray-600">Order ID</p>
                            <p className="font-semibold">{order.id}</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Estimated Delivery</p>
                            <p className="flex items-center gap-1 font-semibold">
                                <Clock className="w-4 h-4 text-gray-500" /> {order.estimatedDelivery}
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="text-gray-600 mb-2">Delivery Address</p>
                        <p className="flex items-center gap-2 text-gray-800">
                            <MapPin className="w-4 h-4 text-red-500" /> {order.address}
                        </p>
                    </div>

                    <div className="mt-6">
                        <p className="text-gray-600 mb-4">Tracking Progress</p>
                        <div className="space-y-4" ref={stepsRef} style={{ visibility: "hidden" }}>
                            {order.steps.map((step, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div
                                        className={`w-6 h-6 rounded-full flex items-center justify-center ${step.completed ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"
                                            }`}
                                    >
                                        {step.completed ? <CheckCircle className="w-4 h-4" /> : idx + 1}
                                    </div>
                                    <span
                                        className={step.completed ? "text-gray-800 font-semibold" : "text-gray-500"}
                                    >
                                        {step.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <Link
                        to="/"
                        ref={buttonRef}
                        className="inline-block text-white bg-[#1A4D2E] px-6 py-2 rounded hover:bg-[#163c25] transition"
                        style={{ visibility: "hidden" }}
                    >
                        Back to Home
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default DeliveryStatus;
