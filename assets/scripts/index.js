let finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

// Print Header to console log
console.log('Financial Analysis (Jan 2010 to Feb 2017)');
console.log('----------------------------------------');

// Define and print number of entries to console log
let totalEntries = finances.length;
console.log('Total number of months included in this report: ' + totalEntries);

// Define grand total
let grandTotal = 0;
// Calculate the grand total using "for" loop, targetting the second nested item in the array [1]
for (var i = 0; i < finances.length; i++) {
    grandTotal = grandTotal + finances[i][1]
};
// Format grand total value to display in $
let grandTotalFormatted = grandTotal.toLocaleString("en-US", {
    style: 'currency',
    currency: 'USD',
});

// Print formatted grand total value to console log
console.log('Net total for this period (profit/loss) : ' + grandTotalFormatted);

// Function to calculate the difference between two numbers
function difference(a, b) {
    if (a >= b) {
        return Math.abs(a - b);
    } else {
        return -Math.abs(b - a);
    }
};

// Calculate the difference between items in "finances" array and store the values in a new array call profitLoss
let profitLoss = [];
for (var j = 0, k = 1; k < finances.length; j++, k++) {
    if (k === undefined) {
        break
    } else {
        profitLoss.push(difference(finances[k][1], finances[j][1]))
    }
};

// For checking that the array is populated correctly
// console.log(profitLoss);

// Define variable to store total of all values in profitLoss array
let totalProfitLoss = 0;

// Calculate total of all values in profitLoss array
for (var l = 0; l < profitLoss.length; l++) {
    totalProfitLoss = totalProfitLoss + profitLoss[l]
};

// For checking that the total value of totalProfitLoss variable
// console.log(totalProfitLoss);

// Define variable to store average value of totalProfitLoss
// Adding "Math.round() * 100 / 100" displays the value to the nearest 100th
let averageProfitLoss = Math.round((totalProfitLoss/profitLoss.length) * 100) / 100;

// Format average profit loss value to display in $
let averageProfitLossFormatted = averageProfitLoss.toLocaleString("en-US", {
    style: 'currency',
    currency: 'USD',
});

// Print average profit loss value to console
console.log('Average monthly change: ' + averageProfitLossFormatted);

// Define max month on month increase variable
let maxIncrease = Math.max(...profitLoss);

// Format max increase value to display in $
let maxIncreaseFormatted = maxIncrease.toLocaleString("en-US", {
    style: 'currency',
    currency: 'USD',
});

// Print largest value in profitLoss array
console.log('Largest month on month increase: ' + maxIncreaseFormatted + ' (' + finances[24][0] + " to " + finances[25][0] + ')');

// Define min month on month increase variable
let minIncrease = Math.min(...profitLoss)

// Format min increase value to display in $
let minIncreaseFormatted = minIncrease.toLocaleString("en-US", {
    style: 'currency',
    currency: 'USD',
});

// Print smallest value in profitLoss array
console.log('Largest month on month decrease: ' + minIncreaseFormatted + ' (' + finances[43][0] + " to " + finances[44][0] + ')');


// Displays all outputs on the webpage
document.write('Financial Analysis (Jan 2010 to Feb 2017)' + "<br>");
document.write('--------------------------------------------------' + '<br>' + '<br>');
document.write('Total number of months included in this report: ' + totalEntries + '<br>' + '<br>');
document.write('Net total for this period (profit/loss): ' + grandTotalFormatted + '<br>' + '<br>');
document.write('Average monthly change: ' + averageProfitLossFormatted + '<br>' + '<br>');
document.write('Largest month on month increase: ' + maxIncreaseFormatted + ' (' + finances[24][0] + " to " + finances[25][0] + ')' + '<br>' + '<br>');
document.write('Largest month on month decrease: ' + minIncreaseFormatted + ' (' + finances[43][0] + " to " + finances[44][0] + ')' + '<br>' + '<br>');