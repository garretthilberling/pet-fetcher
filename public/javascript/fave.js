async function faveClickHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch('/api/pets/faves', {
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

document.getElementById('fave-btn').addEventListener('click', faveClickHandler);