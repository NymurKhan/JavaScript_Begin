const numbers = [34,54,23,45,234,23,23]

console.log(numbers);
numbers.reverse();
console.log(numbers);

const revNum = [32,45,34,56,45,3,34,34];

for(const num of numbers){
    console.log(num);
    revNum.unshift(num);
}
console.log(revNum);


for(let i = 0;)