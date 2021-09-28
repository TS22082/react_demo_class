export const searchByTitle = async (title) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=d3336c70&s=${title}`
  );

  const data = await response.json();
  return data;
};
