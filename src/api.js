import axios from "axios";

const BASE_URL = "https://api.quicksell.co/v1/internal/frontend-assignment"; 

export const fetchTickets = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tickets`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return [];
  }
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

