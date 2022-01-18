import React from "react";
import Chart from "../Chart/Chart";

const ExpesesChart = (props)=>{
    const chartDataPoints = [
        {label: "Led", value: 0},
        {label: "Uno", value: 0},
        {label: "Bre", value: 0},
        {label: "Dub", value: 0},
        {label: "Kve", value: 0},
        {label: "Cvn", value: 0},
        {label: "Cvc", value: 0},
        {label: "Srp", value: 0},
        {label: "Zar", value: 0},
        {label: "Rij", value: 0},
        {label: "Lis", value: 0},
        {label: "Pro", value: 0}
    ];
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); //zacina 0 -> leden
        chartDataPoints[expenseMonth].value += expense.price;
    }
    return <Chart dataPoints={chartDataPoints}/>
}

export default ExpesesChart;