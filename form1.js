function form1() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;

    console.log(fname);
    console.log(lname);
    console.log(mobile);
    console.log(email);

    localStorage.setItem("fname",fname);
    localStorage.setItem("lname",lname);
    localStorage.setItem("mobile",mobile);
    localStorage.setItem("email",email);
}
