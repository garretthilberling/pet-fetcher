const img = document.getElementById("img-input");
var sendImg;

async function convert() {

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

// function runFetch(data) {

//   fetch('/api/convertapi', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ information: data }),
//   })
//     .then(res => res.json())
//     .then(success => console.log(success))
//     .catch(err => console.log(err));

//   return document.getElementById('test-id').setAttribute('src', data)
// }

function setData(data) {
  preview(data);
  sendImg = data;
}

const preview = (imgPrev) => {
    return document.getElementById('test-id').setAttribute('src', imgPrev);
  }

// img.addEventListener('change', convert);
