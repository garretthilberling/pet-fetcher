async function newFormHandler(event) {
    event.preventDefault();
  
    const petName = document.getElementById('pet-name').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;
    const size = document.getElementById('size').value;
    const age = document.getElementById('age').value;
    const bio = document.getElementById('bio').value;

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        petName, species, breed, size, age, bio
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.getElementById('new-pet-form').addEventListener('submit', newFormHandler);