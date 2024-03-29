async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const phone = document.querySelector('#phone-signup').value.trim();
  const state = document.querySelector('#state-signup').value.trim();
  const city = document.querySelector('#city-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password && phone && state && city) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        phone,
        state,
        city,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document.getElementById('login-form').addEventListener('submit', loginFormHandler);

document.getElementById('signup-form').addEventListener('submit', signupFormHandler);