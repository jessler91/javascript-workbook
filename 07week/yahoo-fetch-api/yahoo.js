function getStockData() {

    let inputbox = document.getElementById("tickr");
    let tickr = inputbox.value;

    fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?region=US&lang=en&symbol="+tickr, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "aa58a61455msh9a74d8a8fc41f2fp1c9e39jsn6213f7c23f2a"
        }
    })
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(myjson => {
        console.log(myjson)
    })
    .catch(err => {
        console.log(err);
    });
}

