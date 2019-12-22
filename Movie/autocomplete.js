const creatAutoComplete = ({ root , renderOption }) => {
  // const root = document.querySelector('.autocomplete');
  root.innerHTML = `
    <label><b>Search For A movie</b></label>
    <input class="input" />
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdowm-content results"></div>
      </div>
    </div>
  `;

  // const input = document.querySelector('input');
  // const dropdown = document.querySelector('.dropdown');
  // const resultsWrapper = document.querySelector('.results');
  const input = root.querySelector('input');
  const dropdown = root.querySelector('.dropdown');
  const resultsWrapper = root.querySelector('.results');

  const onInput = async (e) => {
    const movies = await fetchData(e.target.value);

    if (!movies.length) {
      dropdown.classList.remove('is-active');
      return;
    }
    
    resultsWrapper.innerHTML = ''; //刪除再次搜尋後的原來的結果
    dropdown.classList.add('is-active');
    for (let movie of movies) {
      const option = document.createElement('a');
      // const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;

      option.classList.add('dropdown-item');
      option.innerHTML = renderOption(movie);

      option.addEventListener('click', (e) => {
        dropdown.classList.remove('is-active');
        input.value = movie.Title;
        onMovieSelect(movie);
      }); 

      resultsWrapper.appendChild(option);
    }
  };

  input.addEventListener('input', debounce(onInput, 500));

  document.addEventListener('click', (e) => {
    if (!root.contains(e.target)) {
      dropdown.classList.remove("is-active");
    }
  });
}