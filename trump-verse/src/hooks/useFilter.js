import { useState } from "react";

// Custom hook for å håndtere filtre -> State for lagrin av filtre
const useFilter = (initialFilters) => {
  const [filters, setFilters] = useState(initialFilters);

  // Oppdaterer spesifikke filter med navn og verdi
  const updateFilter = (name, value) => {
    setFilters((previousFilters) => {
      return {
        ...previousFilters,
        [name]: value,
      };
    });
  };

  // Tilbakestiller alle filtre til deres opprinnelige verdier
  const resetFilters = () => {
    setFilters(initialFilters);
  };

  // Returnerer filtre og funksjoner for oppdatering og tilbakestilling
  return {
    filters,
    updateFilter,
    resetFilters,
  };
};

export default useFilter;