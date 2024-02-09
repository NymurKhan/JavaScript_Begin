const persons = ['rakib', 'sakib', 'nakib', 'takib'];
const sortedPersons = persons.sort();
console.log(sortedPersons);

const nums = [3,5,2,5,95,0,47,2];
const sor_numasc = nums.sort(function (a, b) { return a - b});
const sor_numdec = nums.sort(function (a, b) { return b - a});
console.log(sor_numasc);
console.log(sor_numdec);

