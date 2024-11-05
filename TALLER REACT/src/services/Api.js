import axios from 'axios';

const API_URL = 'https://picsum.photos/v2/list'; 

export const fetchRandomImages = async (count = 10) => {
  try {
    const response = await axios.get(`${API_URL}?limit=${count}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
