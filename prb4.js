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
    