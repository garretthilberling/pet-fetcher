const img = document.getElementById("img-input");

async function uploadImgHandler(event) {
  event.preventDefault();
  const formData = new FormData();
  formData.append("file", img.files[0]);
  console.log(img.files[0]);
  console.log(formData);

  await fetch("/api/convertapi", {
    method: "POST",
    headers: { 'Content-Type': 'multipart/form-data' },
    body: img.files[0],
  })
  .then(response => {
    response.json()
  })
  .then(data => {
    this.setState({images: data.images, isLoading: false});
    this.props.updateImages(data.images);
  })
  .catch(err => this.setState({err, isLoading: false}))

  // if (response.ok) {
  //   document.location.replace("/");
  // } else {
  //   alert(response.statusText);
  // }
}

document
  .getElementById("new-pet-form")
  .addEventListener("submit", uploadImgHandler);
