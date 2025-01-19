import React from "react";
import { Link } from "react-router-dom";

// Komponent for å vise en ansatt som kort
const StaffCardItem = ({ member, onDelete }) => {   
   let imageUrl = "";

   // Bestemmer korrekt bilde-URL. Hvis profilbildet ikke finnes, bruk standardbilde
   if (member.profilePicture) {
     if (member.profilePicture.startsWith("http")) {
       imageUrl = member.profilePicture;
     } else {
       imageUrl = `http://localhost:5191${member.profilePicture}`;
     }
   } else {
     imageUrl = "http://localhost:5191/images/default.jpg";
   }

   // Return med profilbildet, ansattinfo og handling-knapper
  return (
    <div className="staff-card">
      <img
        src={imageUrl}
        alt={`${member.firstName} ${member.lastName}`}
        className="staff-card__image"
      />

      <div className="staff-card__info">
        <h4 className="staff-card__name">
          {member.firstName} {member.lastName}
        </h4>

        <p className="staff-card__role">{member.role}</p>
      </div>

      <div className="staff-card__actions">
        <Link to={`/staff/details/${member.id}`}
        className="staff-card__button">View Details</Link>

        <Link to={`/staff/edit/${member.id}`} 
            className="staff-card__button">Edit</Link>

        <button
          className="staff-card__button staff-card__button--delete"
          onClick={() => {
            if (window.confirm(`
            Are you sure you want to delete ${member.firstName}?
            `)
            ) {
              onDelete(member.id);
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default StaffCardItem;