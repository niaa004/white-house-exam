import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStaffContext } from "../contexts/StaffContext";
import StaffEditForm from "../components/StaffEditForm";
import "../styles/staff-edit.css";

// Funksjon for å bestemme bildeadressen
const getImageUrl = (profilePicture) => {
  let imageUrl = "http://localhost:5191/images/default.jpg";

  if (profilePicture) {
    if (profilePicture.startsWith("http")) {
      imageUrl = profilePicture;
    } else {
      imageUrl = `http://localhost:5191${profilePicture}`;
    }
  }

  return imageUrl;
};

// Side for å redigere en spesifikk ansatt
const StaffEditPage = () => {
  const { id } = useParams();
  const { staff, updateStaff } = useStaffContext();
  const navigate = useNavigate();

  const staffMember = staff.find((member) => {
    const parsedId = parseInt(id, 10);
    return member.id === parsedId;
  });


  // Håndterer oppdatering av ansattdata
  const handleUpdate = async (updatedStaff) => {
    try {
      const updatedData = await updateStaff(id, updatedStaff);

      alert("Success updating staff to list!");

      navigate("/staff");
    } catch (error) {
      console.error("Error updating staff:", error);
      alert("Failed to update staff. Please try again.");
    }
  };

  // Henter bildeadresse -> Bruker bildeadresse fra funksjonen
  if (staffMember) {
    const imageUrl = getImageUrl(staffMember.profilePicture);

    return (
      <div className="container my-5">
        <h2 className="text-center mb-4 text-primary">Edit Staff Member</h2>
        <img
          className="staff-edit-image"
          src={imageUrl}
          alt={`${staffMember.firstName} ${staffMember.lastName}`}
        />
        <StaffEditForm staffMember={staffMember} onSubmit={handleUpdate} />
      </div>
    );
  } else {
    // Dersom ansatt ikke finnes, viser feilmeldingen
    return (
      <div className="container my-5">
        <div className="alert alert-danger text-center">
          Staff member not found.
        </div>
      </div>
    );
  }
};

export default StaffEditPage;
