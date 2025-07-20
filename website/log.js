  const togglePassword = document.getElementById('togglePassword');
  const passwordField = document.getElementById('password');

  togglePassword.addEventListener('change', () => {
    passwordField.type = togglePassword.checked ? 'text' : 'password';
  });
