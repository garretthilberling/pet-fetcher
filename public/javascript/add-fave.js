function checkCount() {
    var faveCount = document.getElementById('fave-count');
    if(faveCount) {
        document.getElementById('heart').classList.add('text-red-500', 'hover:text-red-400');
    }
}

async function addFaveClickHandler(event) {
    event.preventDefault();

    document.getElementById('heart').classList.toggle('text-red-500');

    const id = document.getElementById('get-id').value;

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

checkCount();

document.getElementById('addFave-btn').addEventListener('click', addFaveClickHandler);
