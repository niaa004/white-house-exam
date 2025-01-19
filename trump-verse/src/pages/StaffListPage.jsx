import React from "react";
import { useStaffContext } from "../contexts/StaffContext";
import StaffListView from "../components/StaffListView";
import '../styles/staff-list.css'

// Side for å vise oversikt over alle ansatte
const StaffListPage = () => {
  const { staff, deleteStaff, loading } = useStaffContext();

  // Viser lastemelding hvis dataene hentes
  if (loading) {
    return (
      <div className="loading-container">
        <p className="loading-message">Staff data is currently loading...</p>
      </div>
    );
  }

  const isStaffEmpty = staff.length === 0; // -> Sjekk om listen er tom

   // Viser melding dersom ingen ansatte er tilgjengelige
  if (isStaffEmpty) {
    return (
      <div className="staff-list-page">
        <h1 className="page-title">Staff Overview</h1>
        <p className="no-staff-message">
          No staff members found. Please add new staff members to the list.
        </p>
      </div>
    );
  }

  // Returnerer oversikt over ansatte ved hjelp av StaffListView-komponenten
  return (
    <div className="staff-list-page">
      <h1 className="page-title">Staff Overview</h1>
      <StaffListView staff={staff} onDelete={deleteStaff} />
    </div>
  );
};

export default StaffListPage;