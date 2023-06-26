import axios from 'axios';

const fetchImages = async (keyWord, page) => {
  const result = await axios(
    `https://pixabay.com/api//?q=${keyWord}&page=${page}&key=35912782-f9206aec1cfed4286d9fa7302&image_type=photo&orientation=horizontal&per_page=12`
  );
  return result.data;
};

export default fetchImages;
