import axios from "axios";

const BASE_URL = "http://localhost:5191/api/TrumpStaff";

// Henter alle ansatte fra API-et
const getAllStaff = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    const errorMessage = error.message;
    console.error("Error fetching staff:", errorMessage);
    throw error;
  }
};

// Henter ansatt basert på -> ID
const getStaffById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    const errorMessage = error.message;
    console.error("Error fetching staff by ID:", errorMessage);
    throw error;
  }
};


// Oppdaterer informasjon for en ansatt
const updateStaff = async (id, updatedStaff) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedStaff);
    return response.data;
  } catch (error) {
    const errorMessage = error.message;
    console.error("Error updating staff:", errorMessage);
    throw error;
  }
};

// Sletter en ansatt basert på -> ID
const deleteStaff = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    const errorMessage = error.message;
    console.error("Error deleting staff:", errorMessage);
    throw error;
  }
};

// Laster opp et bilde til API-et
const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(FILE_UPLOAD_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data.FileUrl; 
  } catch (error) {
    console.error("Error uploading file:", error.message);
    throw error;
  }
};

// Oppretter en ny ansatt
const createStaff = async (staff) => {
  try {
    const response = await axios.post(BASE_URL, staff);
    return response.data;
  } catch (error) {
    console.error("Error creating staff:", error.message);
    throw error;
  }
};

// Eksporterer alle funksjoner som en service
const TrumpStaffService = {
  getAllStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
  uploadImage,
  createStaff
};

export default TrumpStaffService;
