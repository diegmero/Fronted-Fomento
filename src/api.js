import axios from 'axios';

const API_URL = 'http://localhost:1337'; 

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}${endpoint}`);
    console.log('Data received:', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const createData = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_URL}${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating data:', error);
    throw error;
  }
};

