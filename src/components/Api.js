import axios from "axios";

const API_URL = "http://localhost:5000";

export const getPatients = async () => axios.get(`${API_URL}/patients`);
export const addPatient = async (data) => axios.post(`${API_URL}/patients`, data);
export const getPantry = async () => axios.get(`${API_URL}/allPantry`);
export const addPantry = async (data) => axios.post(`${API_URL}/addPantry`, data);
export const updateDietChart = async (id, dietChart) =>
  axios.put(`${API_URL}/patients/${id}/diet`, dietChart);
export const getTasks = async () => axios.get(`${API_URL}/tasks`);
export const addTask = async (data) => axios.post(`${API_URL}/tasks`, data);
export const updateTaskStatus = async (id, status) =>
  axios.put(`${API_URL}/tasks/${id}`, { status });