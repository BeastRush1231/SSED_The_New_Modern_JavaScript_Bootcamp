const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '33e086f5',
      s: searchTerm
    }
  });
  
  return response.data.Search;
};

const input = document.querySelector('input');

const onInput = async (e) => {
  const moives = await fetchData(e.target.value);
  console.log(moives);
};

input.addEventListener('input', debounce(onInput, 500));