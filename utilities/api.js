const api = async (url) => {
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);
    return json.movies;
  }

export default api;