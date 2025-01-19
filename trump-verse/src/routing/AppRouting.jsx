import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import StaffCreatePage from "../pages/StaffCreatePage";
import StaffListPage from "../pages/StaffListPage";
import StaffDetailsPage from "../pages/StaffDetailsPage";
import StaffEditPage from "../pages/StaffEditPage";

// Konfigurerer routingen
const AppRouting = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={<DashboardPage />} 
      />
      
      <Route 
        path="/staff" 
        element={<StaffListPage />} 
      />
      
      <Route 
        path="/staff/details/:id" 
        element={<StaffDetailsPage />} 
      />
      
      <Route 
        path="/staff/edit/:id" 
        element={<StaffEditPage />} 
      />
      
      <Route 
        path="/create" 
        element={<StaffCreatePage />} 
      />
    </Routes>
  );
};

export default AppRouting;
