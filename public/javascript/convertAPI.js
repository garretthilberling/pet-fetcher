async function uploadImgHandler(event) {
    const response = await fetch('/api/convertapi', {
        method: 'POST',
        body: JSON.stringify({
    
        }),
        headers: {
        'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
}
