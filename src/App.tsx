
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import ProductDetails from "./pages/ProductDetails";
// import UserProfile from "./components/UserProfile";
// import Settings from "./components/Settings";
// import Wishlist from "./components/Wishlist";
// import { CartProvider } from "./context/CartContext";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Footer from "./components/Footer";

// const App: React.FC = () => {
//   return (
//     <CartProvider>
//       <Router>
//         <div className="flex flex-col min-h-screen">
//           <main className="flex-grow">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/product/:id" element={<ProductDetails />} />
//               <Route path="/user" element={<UserProfile />} />
//               <Route path="/settings" element={<Settings />} />
//               <Route path="/wishlist" element={<Wishlist />} />
//             </Routes>
//           </main>

//           <Footer />
//         </div>

//         <ToastContainer position="top-right" autoClose={2000} />
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import ProductDetails from "./pages/ProductDetails";
// import Login from "./pages/Login";
// import UserProfile from "./components/UserProfile";
// import Settings from "./components/Settings";
// import Wishlist from "./components/Wishlist";
// import { CartProvider } from "./context/CartContext";
// import { AuthProvider } from "./context/AuthContext";
// import PrivateRoute from "./components/PrivateRoute";
// import Footer from "./components/Footer";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const App: React.FC = () => {
//   return (
//     <CartProvider>
//       <Router>
//         <AuthProvider>
//           <div className="flex flex-col min-h-screen">
//             <main className="flex-grow">
//               <Routes>
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/" element={<Home />} />
//                 <Route path="/product/:id" element={<ProductDetails />} />
//                 <Route
//                   path="/user"
//                   element={<PrivateRoute><UserProfile /></PrivateRoute>}
//                 />
//                 <Route
//                   path="/settings"
//                   element={<PrivateRoute><Settings /></PrivateRoute>}
//                 />
//                 <Route
//                   path="/wishlist"
//                   element={<PrivateRoute><Wishlist /></PrivateRoute>}
//                 />
//               </Routes>
//             </main>
//             <Footer />
//           </div>
//         </AuthProvider>
//         <ToastContainer position="top-right" autoClose={2000} />
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;
// App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import UserProfile from "./components/UserProfile";
import Settings from "./components/Settings";
import Wishlist from "./components/Wishlist";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeliveryStatus from "./pages/DeliveryStatus";

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route
                  path="/user"
                  element={
                    // <PrivateRoute>
                    //   <UserProfile />
                    // </PrivateRoute>
                    <UserProfile/>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    // <PrivateRoute>
                    //   <Settings />
                    // </PrivateRoute>
                    <Settings/>
                  }
                />
                <Route
                  path="/wishlist"
                  element={
                    // <PrivateRoute>
                    //   <Wishlist />
                    // </PrivateRoute>
                    <Wishlist/>
                  }
                />
                <Route
                  path="/DeliveryStatus"
                  element={
                    // <PrivateRoute>
                    //   <Wishlist />
                    // </PrivateRoute>
                    <DeliveryStatus />
                  }
                />
                </Routes>
            </main>
            <Footer />
          </div>
          <ToastContainer position="top-right" autoClose={2000} />
        </AuthProvider>
      </Router>
    </CartProvider>
    // <CartProvider>
    //   <AuthProvider>
    //     <Router>
    //       <div className="flex flex-col min-h-screen">
    //         <main className="flex-grow">
    //           <Routes>
    //             <Route path="/login" element={<Login />} />
    //             <Route path="/" element={<Home />} />
    //             <Route path="/product/:id" element={<ProductDetails />} />
    //             <Route path="/user" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
    //             <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
    //             <Route path="/wishlist" element={<PrivateRoute><Wishlist /></PrivateRoute>} />
    //           </Routes>
    //         </main>
    //         <Footer />
    //       </div>
    //       <ToastContainer position="top-right" autoClose={2000} />
    //     </Router>
    //   </AuthProvider>
    // </CartProvider>

  );
};

export default App;
