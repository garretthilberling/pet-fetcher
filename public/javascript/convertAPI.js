const img = document.getElementById('img-input');

async function uploadImgHandler(event) {
    convertImg(img);
  function convertImg(img) {
    const response = await fetch('/api/convertapi', {
        method: 'POST',
        body: JSON.stringify({
          img
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
}
