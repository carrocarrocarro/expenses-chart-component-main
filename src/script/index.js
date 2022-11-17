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
console.log(expenseData)

// New empty array for the weekly days
const days = []
// Saves the weekly days into a new array
data.forEach(e => {
    // Saves days to new array
    days.push(e.day)
            
})

// Logs the expense data
console.log(days)

// Empty varible for the maxAmout
let maxAmount;

//Get the maxAmount from the expenseData and saves it to the maxAmount
maxAmount= Math.max.apply(null, expenseData)
//Logs the maxAmount 
console.log(maxAmount)

let chartHeightPx
let chartItemHeight

chartHeightPx = 200
//chartItemHeight = (maxAmount/chartHeightPx) * 100
//console.log(chartItemHeight)


data.forEach(item => {

    chartItemHeight = ((item.amount/chartHeightPx) * 100)*5
    console.log(chartItemHeight)

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


/* const chartItems = document.querySelectorAll(".chart-item--staple")
console.log(chartItems)
const amountItems = document.querySelectorAll(".amount")


let count = 0;

chartItems.forEach(chartItem => {

    chartItem.addEventListener("mouseover",() => {
        console.log(chartItem[count])
    })
})
 */

/* function createChart() {
    // Outputting the chart
    

} */

// Saves the max number in the array into a new variable
//maxNumber = Math.max.apply(null, expenseData)
//console.log(maxNumber)

//console.log(expenseData)
//console.log(maxNumber)
/* ${maxNumber === e.amount ? "max" : ""} */

