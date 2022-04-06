const img = document.getElementById("img-input");
// const fs = require('fs');

// function upload (file) {
//   return new Promise((resolve, reject) => {
//       fs.writeFile(`../img/${file.name}.jpg`, file, err => {
//         if (err) {
//           reject(err);
//           return;
//         } else {
//           console.log('');
//           console.log('file successfully uploaded');
//         }
    
//         resolve({
//           ok: true,
//           message: 'File created!'
//         });
//       });
//   })
//   // .then(() => {convert(file);})
// };

async function convert () {
  console.log(JSON.stringify(img.value));
  console.dir(img);
  console.log(typeof img.value);
  var formData = new FormData();
  formData.append('image', img.files[0])

  await fetch('/api/convertapi', {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'image/jpg',
    // },
    body: ''
  })
  .then(res => res.json())
  .then(success => console.log(success))
  .catch(err => console.log(err));
};

img.addEventListener('change', convert);
