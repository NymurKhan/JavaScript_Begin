function monthlySavings(arr, livingCost) {
    // let allPayment = [];
    if (Array.isArray(arr) && typeof livingCost == "number") {
        let totalEarn = 0;
        for (i of arr) {
            if (i >= 3000) {
                let tax = totalEarn * (20 / 100);
                totalEarn += i - tax;
            }
            else {
                totalEarn += i;
            }
        }
        let savings = totalEarn - livingCost;
        if (savings < 0) {
            return "earn more"
        }
        return savings;
    }
    else {
        return "invalid input"
    }
}

// console.log(monthlySavings([900,2000,3000], 5400));