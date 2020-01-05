// 重複 messageInput.value 問題
const { hash } = window.location;
console.log(atob(hash.replace('#', '')));

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');

  const messageInput = document.querySelector('#message-input');
  const encrypted = btoa(messageInput.value);

  // document.querySelector('#link-input').value = `${window.location}#${encrypted}`;

  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${encrypted}`;
  // 使用者可以複製 HTMLInputElement.select()
  linkInput.select();
});