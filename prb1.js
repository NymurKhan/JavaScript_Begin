// *********************************************************************************// 


//Problem-01 : Help The Zoo Manager
//⚠️ Function Name Must be calculateMoney( )

function calculateMoney(ticketBikri) {



    if (ticketBikri < 0) {
        return "Invalid Number";

    }
    else {
        cashAfterSell = ticketBikri * 120;
        careTakerSalary = 500;
        staffLunch = 400;
        // return ;
        return cashAfterSell - (careTakerSalary + staffLunch);
    }
}
// console.log(calculateMoney(10)); 




//************************************end**************************************************//



//Problem-02: Good Name , Bad Name
//⚠️ Function Name Must be checkName()

function checkName(name) {

    console.log(typeof(name));

    if (typeof name == "string") {
        let lowerCase = name.toLowerCase();
        // console.log(lowerCase);

        let lastLetter = lowerCase.charAt(name.length - 1);
        // console.log(lastLetter);

        if (lastLetter == "a" || lastLetter == "y" || lastLetter == "i" || lastLetter == "e" || lastLetter == "o" || lastLetter == "u" || lastLetter == "w") {
            return "Good Name";
        }
        else {
            return "Bad Name";
        }
    }
    else {
        return "invalid";
    }


}
// console.log(checkName('Nymur'));




// **************************************end******************************************//




//Problem 03 : Virus in my Array
//⚠️ Function Name Must be deleteInvalids()


function deleteInvalids(array) {


    if (Array.isArray(array)) {

        let newArr = [];
        for (let i of array) {
            if (typeof (i) == "number") {
                newArr.push(i);
            }
            else {
                continue;
            }
        }
        // console.log(newArr);

        let filterArr = [];
        for (i of newArr) {

            if (isNaN(i)) {
                continue;
            }
            else {
                filterArr.push(i);
            }
        }
        // console.log(filterArr);

    }
    else {
        return "Invalid Array"
    }
}

// let x = [1,2,-3];
// deleteInvalids(x);



// **************************************end*******************************************//




//Problem 04 : Make A Great Password
//⚠️ Function Name Must be password()

function password(obj) {
    const{name, birthYear, siteName} = obj;

    if(typeof birthYear !== 'number' || Object.keys(obj).length !== 3 || typeof name !== 'string' || typeof siteName !== 'string'){
        return `invalid`;
    }
    const firstProperty = name.trim();
    const secondProperty = birthYear.toString().trim();
    const thirdProperty = siteName.trim().charAt(0).toUpperCase() + siteName.slice(1).toLowerCase();
    // return secondProperty.length;
    if(secondProperty.length !== 4){
        return `invalid`;
    }
    
    return `${thirdProperty}#${firstProperty}@${secondProperty}`;
};
// const person = {
//         name: 'nymur',
//         birthYear: 1999,
//         siteName:'linkedin' ,
//     };
//     const result = password(person);
//     console.log(result);
    



// ******************************************end**********************************************//



//Problem 05 : Monthly Savings of a Freelancer
//⚠️ Function Name Must be monthlySavings()

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





// **************************************The End*********************************************//
