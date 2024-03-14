const email = document.querySelector('#email');
const name = document.querySelector('#name');
const message = document.querySelector('#message');
const formSubmit = document.querySelector('#formSubmit');

let userName = '';
let userMessage = '';
let userEmail = '';

name.addEventListener('input', (event) => {
  userName = event.target.value;
});

message.addEventListener('change', (event) => {
  userMessage = event.target.value;
});

email.addEventListener('change', (event) => {
  userEmail = event.target.value;
});

formSubmit.addEventListener('submit', (event) => {
  event.preventDefault();

  if (
    userMessage.trim() === '' ||
    userName.trim() === '' ||
    userEmail.trim() === ''
  ) {
    alert('Please enter Values for fields ');
  } else {
    alert(`We have received your messsage ${userName}`);
  }
});
