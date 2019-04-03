var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  result = {};
  for (var i = 0; i < salesData.length; i++) {
    if (!result[salesData[i].name]) {
      result[salesData[i].name] = {};
    }

    var sTotal = salesData[i].sales.reduce(reducer)


    if (result[salesData[i].name].hasOwnProperty('totalSales')){
        result[salesData[i].name].totalSales += sTotal
    } else {
      result[salesData[i].name].totalSales = sTotal
    }
    var tTotal = sTotal * taxRates[salesData[i].province]
    if (result[salesData[i].name].hasOwnProperty('totalTaxes')){
        result[salesData[i].name].totalTaxes += tTotal
    } else {
        result[salesData[i].name].totalTaxes = tTotal
    }
  }
  return result;
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/