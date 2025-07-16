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
import { GoogleOAuthProvider } from '@react-oauth/google';
import ForgotPassword from "./pages/ForgotPassword";

const GOOGLE_CLIENT_ID = "979661225497-kmoh9f5q5b95n3e7h8pto1i1jr52fgp2.apps.googleusercontent.com";
const App: React.FC = () => {
  return (


    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <CartProvider>
        <Router>
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <main className="flex-grow">
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  {/* <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} /> */}
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element=
                  
                  {<ProductDetails />} />
                  <Route
                    path="/user"
                    element={
                      <PrivateRoute>
                        <UserProfile />
                      </PrivateRoute>
                      //<UserProfile />
                    }
                  />
                  <Route
                    path="/settings"
                    element={
                      <PrivateRoute>
                        <Settings />
                      </PrivateRoute>
                      //<Settings />
                    }
                  />
                  <Route
                    path="/wishlist"
                    element={
                      <PrivateRoute>
                        <Wishlist />
                      </PrivateRoute>
                      // <Wishlist />
                    }
                  />
                  <Route
                    path="/DeliveryStatus"
                    element={
                      <PrivateRoute>
                        <DeliveryStatus />
                      </PrivateRoute>
                      // <DeliveryStatus />
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

    </GoogleOAuthProvider>

  );
};

export default App;
