import axios from 'axios';

const baseUrl = 'https://pixabay.com/api/';
const key = '14230040-8f4217119aa6e0fd5b0363ac7';

const getImages = async (query, page) => {
  const url = `${baseUrl}?key=${key}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`;

  const response = await axios.get(url);
  const data = response.data;

  return data;
}

export default {
  getImages
}