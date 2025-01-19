import React from "react";
import { useParams } from "react-router-dom";
import { useStaffContext } from "../contexts/StaffContext";
import StaffDetails from "../components/StaffDetails";
import "../styles/staff-details.css";

// Side for å vise detaljer om en spesifikk ansatt
const StaffDetailsPage = () => {
  const { id } = useParams();
  const { staff } = useStaffContext();
  const staffMember = staff.find((member) => member.id === parseInt(id));

   // Viser feilmelding dersom ansatt ikke finnes
  if (!staffMember) {
    return (
      <div className="container text-center my-5">
        <div className="alert alert-danger" role="alert">
          Staff member not found.
        </div>
      </div>
    );
  }

  // Returnerer detaljer om den ansatte
  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Staff Member Details</h2>
      <StaffDetails staffMember={staffMember} />
    </div>
  );
};

export default StaffDetailsPage;
