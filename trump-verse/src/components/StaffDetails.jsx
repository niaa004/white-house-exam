import React from "react";

// Komponent for å vise detaljer om en ansatt
const StaffDetails = ({ staffMember }) => {
  // Setter bilde-URL basert på profilbildet eller bruker standardbilde
  const getImageUrl = (profilePicture) => {
    if (profilePicture) {
      return profilePicture.startsWith("http")
        ? profilePicture
        : `http://localhost:5191${profilePicture}`;
    }
    return "http://localhost:5191/images/default.jpg";
  };

  // Returnerer detaljert informasjon om en ansatt
  return (
    <div className="staff-details-container">
      <div className="staff-details-content">

      {/* Ansattes bilder */}
        <div className="staff-image-container">
        <img
          src={getImageUrl(staffMember.profilePicture)}
          alt={`${staffMember.firstName} ${staffMember.lastName}`}
          className="staff-image"
        />
      </div>

        {/* Ansattes info */}
        <div className="staff-info-container">
          <h2 className="staff-name">
            {staffMember.firstName} {staffMember.lastName}
          </h2>
          
          <ul className="staff-info-list">
            <li>
            <strong>ID:</strong> {staffMember.id}
            </li>
            <li>
            <strong>Role:</strong> {staffMember.role}
            </li>
            <li>
            <strong>Email:</strong> {staffMember.email}
            </li>
            <li>
            <strong>Gender:</strong> {staffMember.gender}
            </li>
            <li>
            <strong>Phone:</strong> {staffMember.phoneNumber}
            </li>
            <li>
            <strong>Date of Hire:</strong> {new Date(staffMember.dateOfHire).toLocaleDateString()}
            </li>
            <li>
            <strong>Active Status:</strong> {staffMember.isActive ? "Yes" : "No"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StaffDetails;
