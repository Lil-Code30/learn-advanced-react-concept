import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired() {
  // Check the authenticated status of the user
  const authenticated = false;
  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

// Check the authenticated status of the user
// If they're NOT authenticated
// send the user to the login page
// If they ARE authenticated
// Render the Outlet
