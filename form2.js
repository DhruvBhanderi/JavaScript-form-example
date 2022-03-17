function form2() {
  
    var dob = document.getElementById("dob").value;
    var radio = document.querySelector("input[name = gender]:checked").value;

    console.log(dob);
    console.log(radio);

    localStorage.setItem("dob",dob);
    localStorage.setItem("radio",radio);
}