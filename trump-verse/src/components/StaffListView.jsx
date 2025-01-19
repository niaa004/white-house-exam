import React from "react";
import StaffCardItem from "./StaffCardItem";
import useFilter from "../hooks/useFilter";

// Viser en liste over ansatte og gir filtreringsmuligheter
const StaffListView = ({ staff, onDelete }) => {
  // Henter filtre og funksjoner for oppdatering og nullstilling av filtre
  const { filters, updateFilter, resetFilters } = useFilter({
    role: "",
    gender: "",
    isActive: "",
  });

  // Oppdaterer valgt filter basert på brukerinndata
  const handleFilterChange = (event) => {
    const filterName = event.target.name;
    const filterValue = event.target.value;
    updateFilter(filterName, filterValue);
  };

  // Håndterer filtrering av ansatte basert på rolle, kjønn og status
  const applyFilters = (data) => {
    const filteredData = data.filter((member) => {
      let matchesRole = true;
      if (filters.role !== "") {
        matchesRole = member.role === filters.role;
      }

      let matchesGender = true;
      if (filters.gender !== "") {
        matchesGender = member.gender === filters.gender;
      }

      let matchesActive = true;
      if (filters.isActive !== "") {
        const isActiveFilter = filters.isActive === "true";
        matchesActive = member.isActive === isActiveFilter;
      }

      if (matchesRole) {
        if (matchesGender) {
          if (matchesActive) {
            return true;
          }
        }
      }
      return false;
    });

    return filteredData;
  };

 // Filtrerte ansatte -> Henter unike roller fra ansatte for dropdown-menyen
  const filteredStaff = applyFilters(staff);
  const uniqueRoles = staff.map((member) => member.role);
  const distinctRoles = Array.from(new Set(uniqueRoles));

  // Returnerer listen med filtreringsalternativer og ansattekort
  return (
    <div className="staff-list-view">
      <div className="filter-container" role="form" aria-labelledby="filter-heading">
        <label>
          Role:
          <select
            name="role"
            value={filters.role}
            onChange={handleFilterChange}
            className="filter-dropdown"
          >
            <option value="">All Roles</option>
            {distinctRoles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
        </label>

        <label>
          Gender:
          <select
            name="gender"
            value={filters.gender}
            onChange={handleFilterChange}
            className="filter-dropdown"
          >
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>

        <label>
          Active Status:
          <select
            name="isActive"
            value={filters.isActive}
            onChange={handleFilterChange}
            className="filter-dropdown"
          >
            <option value="">All</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </label>

        <button className="reset-button" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>

      {/* Ansattliste */}
      <div className="staff-list-content">
        {filteredStaff.length > 0 ? (
          filteredStaff.map((member) => {
            return (
              <StaffCardItem
                key={member.id}
                member={member}
                onDelete={onDelete}
              />
            );
          })
        ) : (
          <p>No staff members found.</p>
        )}
      </div>
    </div>
  );
};

export default StaffListView;
