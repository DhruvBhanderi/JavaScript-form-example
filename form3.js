function form3() {

    var state = document.querySelector("#state").value;
    document.getElementById("state").innerHTML = state;

    var country = document.querySelector("#country").value;
    document.getElementById("country").innerHTML = state;

    console.log(state);
    console.log(country);

    localStorage.setItem("state",state);
    localStorage.setItem("country",country);
}