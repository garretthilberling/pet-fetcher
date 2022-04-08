async function addFaveClickHandler(event) {
    event.preventDefault();

    document.getElementById('heart').classList.toggle('.text-red-500');

    const id = document.getElementById('get-id');

    const response = await fetch('/api/pets/addFave', {
        method: 'PUT',
        body: JSON.stringify({
            pet_id: id
        }),
        headers: {
            'content-type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.getElementById('addFave-btn').addEventListener('click', addFaveClickHandler);