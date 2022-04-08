function toggleHeartColor(event) {
    event.preventDefault();

    document.getElementById('heart').classList.toggle('.text-red-500');
}

async function addFaveClickHandler(event) {
    event.preventDefault();


    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

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
document.getElementById('addFave-btn').addEventListener('click', toggleHeartColor);
