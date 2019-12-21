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

let timeoutID;
const onInput = (e) => {
  if (timeoutID) {
    clearTimeout(timeoutID);
  }
  timeoutID = setTimeout( () => {
    fetchData(e.target.value);
  }, 1000);
}

input.addEventListener('input', onInput);