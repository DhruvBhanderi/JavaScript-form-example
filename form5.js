// FORM - 1 GET DATA

document.getElementById("fname").innerHTML = localStorage.getItem("fname");
document.getElementById("lname").innerHTML = localStorage.getItem("lname");
document.getElementById("mobile").innerHTML = localStorage.getItem("mobile");
document.getElementById("email").innerHTML = localStorage.getItem("email");

// FORM -2 GET DATA 

document.getElementById("dob").innerHTML = localStorage.getItem("dob");
document.getElementById("radio").innerHTML = localStorage.getItem("radio");

// FORM -3 GET DATA

document.getElementById("state").innerHTML = localStorage.getItem("state");
document.getElementById("country").innerHTML = localStorage.getItem("country");

//FORM -4 GET DATA

document.addEventListener("DOMContentLoaded",()=>{
  let recentImage = localStorage.getItem("imageUpload")
  if(recentImage){
      document.getElementById("imageUpload").setAttribute("src",recentImage)
  }
})