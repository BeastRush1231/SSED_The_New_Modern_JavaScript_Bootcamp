const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '33e086f5',
      s: searchTerm
    }
  });
  
  console.log(response.data);
};

const input = document.querySelector('input');
input.addEventListener('input', (e) => {
  // console.log(e.target.value);
  fetchData(e.target.value);
})