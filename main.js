
// include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";

var ratio_el = document.getElementById("dtratio");

function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}

// display results after convertion
function displayResults(currency) {
    let fromRate = currency.rates["USD"];
    let toRate = currency.rates["TRY"];
    ratio_el.innerHTML =
        (toRate / fromRate);
    console.log(toRate);
    console.log(ratio_el);
}
setInterval(getResults(), 1000);