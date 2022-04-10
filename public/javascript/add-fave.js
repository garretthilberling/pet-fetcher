async function addFaveClickHandler(event) {
    event.preventDefault();
    const id = this.id;

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

document.querySelector('.addFave-btn').addEventListener('click', addFaveClickHandler);
