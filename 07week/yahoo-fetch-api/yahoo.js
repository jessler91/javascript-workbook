// =================================================== //
// ======= Choose you own API Assignment ============= // 
// ================ Justin Essler ==================== //
// =================================================== //

var companyName;
var marketCap;
var industry;
var sector;
var website;
var totalRevenue;
var totalEBITDA;
var grossMargin;
var totalCash;
var totalDebt;
var debtTwoEquity;

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

    // You are passing the result to definedVariables function, but bellow that function is not accepting any parameters/input
    
    .then(myjson => {
        console.log(myjson)
        defineVariables(myjson)
    })
      
    .catch(err => {
        console.log(err);
    });
  
}

// Define the Important Company Return Metrics
// Defining the values of the variables collected to be updated
    // This is the variable definitions to get the value that 
    // will be used to update the spad with matching element
    // research further JSON handeling

function defineVariables(results) {

     companyName = results.price.shortName;
     marketCap = results.price.marketCap.fmt;
     industry = results.summaryProfile.industry;
     sector = results.summaryProfile.sector;
     website = results.summaryProfile.website;
     totalRevenue = results.financialData.totalRevenue.fmt;
     totalEBITDA = results.financialData.ebitda.fmt;
     grossMargin = results.financialData.grossMargins.fmt;
     totalCash = results.financialData.totalCash.fmt;
     totalDebt = results.financialData.totalDebt.fmt;
     debtTwoEquity = results.financialData.debtToEquity.fmt;

    // then update the spans with the captured values
    return updatePage();

}

// Get the Element from the HTML by the defined ID
// set the inner text of the element to be the return metric value
function updatePage() {

    // Summary Profile
    let nameElement = document.getElementById("comapnyName");
    nameElement.innerText = " "+companyName;
    let marketCapElement = document.getElementById("marketCap");
    marketCapElement.innerText = " "+marketCap;
    let industryElement = document.getElementById("industry");
    industryElement.innerText = " "+industry;
    let sectorElement = document.getElementById("sector");
    sectorElement.innerText = " "+sector;
    let websiteElement = document.getElementById("website");
    websiteElement.innerText = " "+website;
    //  Income Statement
    let totalRevenueElement = document.getElementById("totalRevenue");
    totalRevenueElement.innerText = " "+totalRevenue;
    let totalEBITDAElement = document.getElementById("ebitda");
    totalEBITDAElement.innerText = " "+totalEBITDA;
    let grossMarginElement = document.getElementById("grossMargin");
    grossMarginElement.innerText = " "+grossMargin;
    //  Balance Sheet Info
    let totalCashElement = document.getElementById("totalCash");
    totalCashElement.innerText = " "+totalCash;
    let totalDebtElement = document.getElementById("totalDebt");
    totalDebtElement.innerText = " "+totalDebt;
    let debtTwoEquityElement = document.getElementById("debtTwoEquity");
    debtTwoEquityElement.innerText = " "+debtTwoEquity;

}









