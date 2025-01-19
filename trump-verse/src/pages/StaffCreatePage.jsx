import React from "react";
import { useNavigate } from "react-router-dom";
import { useStaffContext } from "../contexts/StaffContext";
import StaffCreateForm from "../components/StaffCreateForm";

// Side for å opprette en ny ansatt
const StaffCreatePage = () => {
  const { createStaff } = useStaffContext();
  const navigate = useNavigate();

  // opprettelsen av en ny ansatt og navigerer til oversiktssiden etter 0.5 sek
  const handleCreate = async (newStaff) => {
    try {
      await createStaff(newStaff);
      alert("Staff member created successfully!");
      setTimeout(() => {
        navigate("/staff");
      }, 500);
    } catch (error) {
      alert("Failed to create staff. Please try again.");
    }
  };

  // Returnerer layout for opprettelses-skjemaet
  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Create New Staff Member</h2>
      
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow p-4">
            <StaffCreateForm onSubmit={handleCreate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffCreatePage;
