import axios from "axios";
export const unSplash = async (image, currentPage) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: "Sz1ByNI4PdySfBERtMf8tWw2Aea0PCQh4UPx84Jeejs",
      query: image,
      per_page: 12,
      page: currentPage,
    },
  });
  return {
    results: response.data.results || [],
    total: response.data.total,
  };
};
