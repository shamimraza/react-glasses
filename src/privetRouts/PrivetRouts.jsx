import React from "react";
import useAuth from "../hooks/UseHooks";
import { Navigate } from "react-router-dom";

const PrivetRouts = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <h2 className="text-6xl">Loading</h2>;
  }

  if (!user?.email) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default PrivetRouts;
