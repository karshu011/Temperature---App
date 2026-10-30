
function convert() {
    let temp = document.getElementById("temp").value;
    let type = document.getElementById("type").value;
    let answer = document.getElementById("answer");

    if (temp === "") {
        answer.innerHTML = "Please enter temperature";
        return;
    }

    if (type === "c") {
        let result = (temp * 9 / 5) + 32;
        answer.innerHTML = temp + " °C = " + result.toFixed(2) + " °F";
    } 
    else {
        let result = (temp - 32) * 5 / 9;
        answer.innerHTML = temp + " °F = " + result.toFixed(2) + " °C";
    }
}

