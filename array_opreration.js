function sumOfNumbers(numbers){
    // console.log(numbers);
    let sum = 0;
    for(const num of numbers){
        console.log(num);
        sum = sum + num;
    }
    return sum;
}
const numbs = [43, 6, 7, 23];
const sum = sumOfNumbers(numbs);
console.log('sum of numbers is', sum)
