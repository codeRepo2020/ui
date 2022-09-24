function getData() {
    const value = {
        "mf": "17",
        "days": 5
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/api/investment/fetchByDuration", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        "mf": "17",
        "days": 5
    }));

    xhr.onload = function() {
        console.log("HELLO")
        console.log(this.responseText);
        UserData = JSON.parse(this.responseText);
        worker();
    }
}