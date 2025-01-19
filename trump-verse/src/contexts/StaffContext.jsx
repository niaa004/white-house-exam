import React, { createContext, useContext, useState, useEffect } from "react";
import TrumpStaffService from "../services/TrumpStaffService";

const StaffContext = createContext();

// Håndterer tilstand og funksjoner for ansatte -> State for lagrin -> Sporing
export const StaffProvider = ({ children }) => {
  const [staff, setStaff] = useState([]); 
  const [loading, setLoading] = useState(false);

   // Fetcher ansatte fra backend ved initialisering
  useEffect(() => {
    const fetchStaff = async () => {
      setLoading(true);
      try {
        const staffData = await TrumpStaffService.getAllStaff();
        setStaff(staffData);
      } catch (error) {
        console.error("Failed to fetch staff", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  // Funksjon for å slette en ansatt basert på ID
  const deleteStaff = async (id) => {
    try {
      await TrumpStaffService.deleteStaff(id);
      setStaff((previousStaffList) => {
        const updatedStaffList = previousStaffList.filter(
          (staffMember) => staffMember.id !== id
        );
        return updatedStaffList;
      });
    } catch (error) {
      console.error("Error deleting staff:", error.message);
      throw new Error("Unable to delete staff. Please try again.");
    }
  };

  // Funksjon for å opprette en ny ansatt
  const createStaff = async (newStaff) => {
    try {
      const createdStaff = await TrumpStaffService.createStaff(newStaff);
      setStaff((prev) => [...prev, createdStaff]);
      return createdStaff;
    } catch (error) {
      console.error("Failed to create staff:", error);
      throw error;
    }
  };

  // Funksjon for å oppdatere en ansatt basert på ID
  const updateStaff = async (id, updatedStaff) => {
    try {
      const updatedData = await TrumpStaffService.updateStaff(id, updatedStaff);

      setStaff((previousStaffList) =>
        previousStaffList.map((staffMember) =>
          staffMember.id === parseInt(id) ? updatedData : staffMember
        )
      );
    } catch (error) {
      console.error("Failed to update staff. Error:", error.message);
      throw new Error("Unable to update staff. Please try again.");
    }
  };

  // Returnerer konteksten med tilstand og funksjoner
  return (
    <StaffContext.Provider
      value={{
        staff,
        setStaff,
        loading,
        deleteStaff,
        createStaff,
        updateStaff,
      }}
    >
      {children}
    </StaffContext.Provider>
  );
};

// Custom hook for å bruke StaffContext i andre komponenter
export const useStaffContext = () => {
  const context = useContext(StaffContext);
  if (context === undefined) {
    throw new Error("useStaffContext must be used within a StaffProvider");
  }

  return context;
};
