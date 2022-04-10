var idArr = [];
document.querySelectorAll('.get-id').forEach(function(id) {
    idArr.push(Number(id.value))
});
console.log(idArr);

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

for(var i = 0; i < idArr.length; i++) {
    document.querySelector(`.addFave-btn-${idArr[i]}`).addEventListener('click', addFaveClickHandler);
}
