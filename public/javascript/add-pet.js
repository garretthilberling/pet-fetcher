const img = document.getElementById("img-input");
var sendImg;


function convert() {

  let newImage = URL.createObjectURL(img.files[0])
  // runFetch(newImage);
  var xhr = new XMLHttpRequest;
  xhr.responseType = 'blob';

  xhr.onload = function () {
    var recoveredBlob = xhr.response;

    var reader = new FileReader;
    var blobAsDataURL;
    reader.onload = function () {
      blobAsDataURL = reader.result;
      setData(blobAsDataURL)
    };

    reader.readAsDataURL(recoveredBlob);
  };

  xhr.open('GET', newImage);
  xhr.send();

}


async function newFormHandler(event) {
  event.preventDefault();
  
    const pet_name = document.getElementById('pet-name').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;
    const size = document.getElementById('size').value;
    const age = document.getElementById('age').value;
    const bio = document.getElementById('bio').value;
    const pic_filename = sendImg;

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

  const setData = (data) => {
    preview(data);
    sendImg = data;
  }

  const preview = (imgPrev) => {
    return document.getElementById('test-id').setAttribute('src', imgPrev);
  }
  
  
  document.getElementById('new-pet-submit').addEventListener('click', newFormHandler);
  document.getElementById('img-input').addEventListener('change', convert);