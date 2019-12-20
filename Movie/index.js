const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '33e086f5',
      s: 'avengers'
    }
  });
  
  console.log(response.data);
};

fetchData();