// // // var ujon = 50;

// // // if(ujon < 200){
// // //     console.log("ami niye asbo")
// // // }
// // // else{
// // //     console.log("anbo na")
// // // }

// // // // for loop

// // // const nums = [23, 45,58,65,32,56,23,65]
// // // for(items of nums){
// // //     console.log(items);
// // // }

// // // // while loop

// // let oops = 49;
// // while(oops < 80){
// //     console.log('hellloooo', oops);
// //     oops++;
// // }

// // let bur = 1;
// // while(bur <= 10){
// //     console.log(bur);
// //     bur++;
// // }


// // // string

// const country = 'Bangladesh';
// const division = "Dhaka";
// const district = `gazipur`;
// const thana = new String('Sreepur');
// console.log(typeof division);
// console.log(typeof thana);


// // string is immutable & array is mutable we can change array


// const capital = (`dhaka`);
// // console.log(capital.length);
// // console.log(capital[3]);
// capital[3] = 'G';
// console.log(capital);

// // case korbo string er name e

// const subject = 'chemistry';
// const book = 'chemistry';
// const school = 'RAJ uk uttara';
// console.log(school);
// console.log(school.toLowerCase());

// if(subject === book){
//     console.log('iam reading book eibar fatai dimu');
// }
// else{
//     console.log('hudai hudai pristha ultai');
// }


// const drink = 'water';
// const liquid = '  water  ';

// if(drink.trim() === liquid.trim()){
//     console.log('panir opor name jibon')
// }
// else{
//     console.log('na na na na na somudrer panir name jibon na')
// }



// // // slice join concat includes

// // const address = 'andorkilla';
// // const part = address.slice(2, 5);
// // console.log(part);


// // const sentence = 'iam a student of kalinga institute of insudtrial tech';
// // console.log(sentence.split(' '));
// // console.log(sentence.split('a'));


// // const fiendsStr = 'faruk,emon,saiful,sharif,hasib';
// // const friends = fiendsStr.split(',');
// // console.log(friends);

// // // const realFriend = [ 'rahim', 'karim', 'sazzzad', 'taha', 'tonmoy'];
// // // console.log(realFriend.join());
// // // console.log(realFriend.join('/'));
// // // console.log(realFriend.join('-'));





// // // // concat\\
// // // const first= 'abid';
// // // const sec = 'navid';

// // // const fullname = first + ' ' + sec;
// // // console.log(fullname);

// // // const fullname2 = first.concat(' ').concat(sec);
// // // console.log(fullname2);

// // // console.log(sec.includes('c'));





// // // // reverse js\\

// // // const sentence = ' iam a web developer';

// // // let reverse = ''
// // // for(const letter of sentence){
// // //     // console.log(letter)
// // //     reverse = letter + reverse;
// // // }
// // // console.log(reverse)

// // // object\\ non primitive

// // const bottle = {
// //     brand: 'apple',
// //     price: 45,
// //     color:'white',
// //     isClean: false
// // }

// // const sub = {
// //     name: 'biology',
// //     teacher: 'rasheda mam',
// //     examDate: '30 feb',
// //     chapters: ['first', 'third'],
// //     exams: {
// //         name: 'final',
// //         marks: 100,
// //     }

// // }



// const person = {
//     name: 'nymur',
//     age: 34,
//     school: 'kiit',
//     position: 'student',
//     salary: 0,
//     married: false
// //     // fav places: ['bandarban', 'odisha','jharlkhand']
// // }
// // person.salary = 4000;

// // // console.log(person);
// // // console.log(person.married)
// // console.log(person)


// //  keysss and values

// const computer = {
//     ram : 354,
//     name : 'ncvs',
//     rom: 49

// }
// const keys = object.values(computer);
// console.log(keys);


const mobile = {
    brand: 'sam',
    price: 30000,
    ram: 39,
    isNew: true
}

for(const rt in mobile){
    console.log(rt)
    console.log(mobile[rt])
}
console.log(mobile)