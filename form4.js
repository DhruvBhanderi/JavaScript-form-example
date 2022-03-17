
  let file = document.querySelector("#upload");

  file.addEventListener("change",function () {

    image = document.querySelector("#imageUpload");
    const choosedFile = this.files[0];
    
    if (choosedFile) {
      const reader = new FileReader();
      
      reader.addEventListener("load", function () {
        image.setAttribute("src",reader.result);
        localStorage.setItem("imageUpload", reader.result);
      })
      reader.readAsDataURL(choosedFile);
    }
  })