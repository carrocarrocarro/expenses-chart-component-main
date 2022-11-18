//Import the data
import data from '../../data.json' assert { type: "json" };
// Logs the data in the console
console.log(data)

// Where the chart component will be outputted
const chart = document.getElementById('chart');

// New empty array for the exepnse data only 
const expenseData = []
// Saves only the expense data into the the expsenseData array 
data.forEach(e => {
    // Saves expensedata to new array
    expenseData.push(e.amount)
            
})

//Logs the expense data in the array
//console.log(expenseData)

// Empty varible for the maxAmout
let maxAmount;

//Get the maxAmount from the expenseData and saves it to the maxAmount
maxAmount= Math.max.apply(null, expenseData)
//Logs the maxAmount 
//console.log(maxAmount)

// Variable for the height of the chart
let chartHeightPx
// Variable for the height of the staple
let chartItemHeight

// Sets the height of the chart to 200 (px)
chartHeightPx = 200

//Loop thorugh the expense data
data.forEach(item => {

    // Sets the height of the staple depending oo the value
    chartItemHeight = ((item.amount/chartHeightPx) * 100)*5
    
    //console.log(chartItemHeight)

    // Outputs the chart
    chart.innerHTML += ` 
        <div 
            class="chart-item" style="height:${chartHeightPx}px"
        >
            
            <div 
                class="chart-item--staple ${maxAmount === item.amount ? "max" : ""}"
                style="height:${chartItemHeight}px"
            >
                
            </div>
            <span class="amount">
                $${item.amount}
            </span>
            <p class="chart-item--day">
                ${item.day}
            </p>
            
        </div>
        `
})

