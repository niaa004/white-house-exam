import React, { useState, useEffect } from "react";

// Form for å opprette ansatte -> Bruker useState til å håndtere input-data fra brukeren
const StaffCreateForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ 
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    gender: "",
    phoneNumber: "",
    dateOfHire: "",
    profilePicture: "",
    isActive: true,
  });

  // Tilgjengelige default bilder og feilmelding 
  const [availableImages, setAvailableImages] = useState([
    "/images/default1.jpg",
    "/images/default2.jpg",
    "/images/default3.jpg",
    "/images/default4.jpg",
    "/images/default5.jpg"
]);
  const [error, setError] = useState(null);

// Oppdaterer formData når brukeren fyller ut skjemaet
  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
      setFormData((previousFormData) => ({
        ...previousFormData,
        [fieldName]: fieldValue,
      }));
  };

  // Håndterer innsending av skjema
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validering av feltene
    if (formData.firstName === "") {
      setError("First Name is required.");
      return;
    }
    if (formData.lastName === "") {
      setError("Last Name is required.");
      return;
    }
    if (formData.role === "") {
      setError("Role is required.");
      return;
    }
    if (formData.email === "") {
      setError("Email is required.");
      return;
    }
    if (formData.gender === "") {
      setError("Gender is required.");
      return;
    }
    if (formData.phoneNumber === "") {
      setError("Phone Number is required.");
      return;
    }
    if (formData.dateOfHire === "") {
      setError("Date of Hire is required.");
      return;
    }

    // Sender data til API gjennom onSubmit-funksjonen
      try {
        let profilePicture = formData.profilePicture; 
        const newStaff = { ...formData, profilePicture };
        await onSubmit(newStaff);

    // Tilbakestiller etter bekreftelse
      setFormData({
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        gender: "",
        phoneNumber: "",
        dateOfHire: "",
        profilePicture: "",
        isActive: true,
      });
      setError(null);
    } catch (error) {
      setError("Failed to create staff. Please try again.");
    }
  };

  // Returnerer skjemaet -> (3)Kjønn og telefonnumer ->(4)Ans.Dato og profilbildet
  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3">

      {/* 1: Fornavn og etternavn */}
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-control"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-control"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>


        {/* 2: Rolle og e-post */}
        <div className="col-md-6">
          <label htmlFor="role" className="form-label">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            className="form-control"
            value={formData.role}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* 3: Kjønn og tlf-nummer */}
        <div className="col-md-6">
          <label htmlFor="gender" className="form-label">Gender</label>
          <input
            type="text"
            id="gender"
            name="gender"
            className="form-control"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="form-control"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        {/* 4: Ansettelsesdato og profilbilde */}
        <div className="col-md-6">
          <label htmlFor="dateOfHire" className="form-label">Date of Hire</label>
          <input
            type="date"
            id="dateOfHire"
            name="dateOfHire"
            className="form-control"
            value={formData.dateOfHire}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
    <label htmlFor="profilePicture" className="form-label">Choose Profile Picture</label>
    <select
      id="profilePicture"
      name="profilePicture"
      className="form-control"
      value={formData.profilePicture}
      onChange={handleChange}
    >
      <option value="">Select an image</option>
      {availableImages.map((image) => (
        <option key={image} value={`http://localhost:5191${image}`}>
      {image} 
      </option>
      ))}
    </select>
  </div>

  {/* 5: Aktiv status */}
        <div className="col-md-6">
          <label htmlFor="isActive" className="form-label">Is Active</label>
          <input
            type="checkbox"
            id="isActive"
            name="isActive"
            className="form-check-input"
            checked={formData.isActive}
            onChange={(event) => {
              const isChecked = event.target.checked;
              setFormData((previousFormData) => {
                const updatedFormData = { ...previousFormData };
                updatedFormData.isActive = isChecked;
                return updatedFormData;
              });
            }}
          />
        </div>
      </div>

     {/* Feilmelding dersom valideringen */}
    {error !== null ? (
       <p className="text-danger mt-3">{error}</p>) : null}

      <div className="d-flex justify-content-end mt-4">
        <button type="submit" className="btn btn-primary">Create Staff</button>
      </div>
    </form>
  );
};


export default StaffCreateForm;
