import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
    const { user } = useSelector((store) => store.auth);

    // If no user → redirect to login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Otherwise render the child routes
    return <>{children}</>;
};

export default ProtectedRoutes;
