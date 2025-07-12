// components/PrivateRoute.tsx
// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
//     const { isAuthenticated } = useAuth();
//     return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
// };

// export default PrivateRoute;
// components/ProtectedRoute.tsx


// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
//     const { user } = useAuth();

//     return user ? children : <Navigate to="/login" />;
// };

// export default ProtectedRoute;


// components/PrivateRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
