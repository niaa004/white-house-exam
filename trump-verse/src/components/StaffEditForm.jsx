import React, { useState } from "react";

// Skjerma for redigering -> oppretter kopi av ansattes data
const StaffEditForm = ({ staffMember, onSubmit }) => {
  const [formData, setFormData] = useState({ ...staffMember });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Håndterer endringer i inputfelt
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //Håndterer innsending av redigeringsskjermaet
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Tekst på button baser på innsensingsstatus
  let buttonText;
  if (isSubmitting) {
    buttonText = "Saving...";
  } else {
    buttonText = "Update Staff";
  }

  // Returnerer skjema for redigering
  return (
    <form className="card p-4 shadow" onSubmit={handleSubmit}>
      <div className="row g-3">
        {/* 1: Fornavn og etternavn */}
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* 2: Rolle og e-post */}
        <div className="col-md-6">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* 3: Kjønn og telefonnummer */}
        <div className="col-md-6">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* 4: Ansettelsesdato og profilbilde */}
        <div className="col-md-6">
          <label htmlFor="dateOfHire" className="form-label">
            Date of Hire
          </label>
          <input
            type="date"
            id="dateOfHire"
            name="dateOfHire"
            value={formData.dateOfHire}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="profilePicture" className="form-label">
            Profile Picture URL
          </label>
          <input
            type="text"
            id="profilePicture"
            name="profilePicture"
            value={formData.profilePicture}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>

      {/* Innsendingsknapp */}
      <div className="d-flex justify-content-end mt-4">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          Update Staff
        </button>
      </div>
    </form>
  );
};

export default StaffEditForm;
