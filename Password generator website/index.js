// Get the elements
const generateBtn = document.querySelector('.genPassword');
const inputField = document.querySelector('.input');
const copyBtn = document.querySelector('.copyButton');
const copiedText = document.querySelector('.copiedText');

// Generate a random password
const generatePassword = () => {
  const length = 10; // Length of the generated password
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
};

// Hide the copied text by default
copiedText.style.display = 'none';

// Update the input field with the generated password
generateBtn.addEventListener('click', () => {
  const generatedPassword = generatePassword();
  inputField.value = generatedPassword;
  inputField.removeAttribute('disabled');
  inputField.focus();
  copiedText.style.display = 'none'; // Hide the copied text
});

// Copy the generated password to the clipboard
copyBtn.addEventListener('click', () => {
  inputField.select();
  document.execCommand('copy');
  copiedText.style.display = 'block'; // Show the copied text
  setTimeout(() => {
    copiedText.style.display = 'none'; // Hide the copied text after 2 seconds
  }, 1000);
});
