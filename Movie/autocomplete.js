const creatAutoComplete = ({ 
  root, 
  renderOption, 
  onOptionSelect, 
  inputValue,
  fetchData
}) => {
  // const root = document.querySelector('.autocomplete');
  root.innerHTML = `
    <label><b>Search</b></label>
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
    const items = await fetchData(e.target.value);

    if (!items.length) {
      dropdown.classList.remove('is-active');
      return;
    }
    
    resultsWrapper.innerHTML = ''; //刪除再次搜尋後的原來的結果
    dropdown.classList.add('is-active');
    for (let item of items) {
      const option = document.createElement('a');
      // const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;

      option.classList.add('dropdown-item');
      option.innerHTML = renderOption(item);

      option.addEventListener('click', (e) => {
        dropdown.classList.remove('is-active');
        input.value = inputValue(item);
        onOptionSelect(item);
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