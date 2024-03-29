const img = document.getElementById("img-input");
var sendImg;


function convert() {

  let newImage = URL.createObjectURL(img.files[0])
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


async function editFormHandler(event) {
    event.preventDefault();
  
    const pet_name = document.getElementById('pet-name').value.trim();
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;
    const size = document.getElementById('size').value;
    const age = document.getElementById('age').value;
    const bio = document.getElementById('bio').value;
    const pic_filename = sendImg;

    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    console.log(id);
    
    const response = await fetch(`/api/pets/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        pet_name, species, breed, size, age, bio, pic_filename
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
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
  
  document.getElementById('edit-pet').addEventListener('click', editFormHandler);
  document.getElementById('img-input').addEventListener('change', convert);

  