async function newFormHandler(event) {
    event.preventDefault();
  
    const pet_name = document.getElementById('pet-name').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;
    const size = document.getElementById('size').value;
    const age = document.getElementById('age').value;
    const bio = document.getElementById('bio').value;
    const pic_filename = document.getElementById("pic_filename").value;

    const response = await fetch(`/api/pets`, {
      method: 'POST',
      body: JSON.stringify({
        pet_name, bio, species, breed, size, age, pic_filename
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.getElementById('new-pet-form').addEventListener('submit', newFormHandler);