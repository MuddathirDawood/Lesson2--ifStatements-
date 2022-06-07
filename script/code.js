// let age = 18;
// let salary = 5000;
// let bonus = 500;

// If else statement
// if ((age >= 18) && (salary >= 5000)) {
//     salary += bonus;
//     console.log('Your salary: R'.concat(salary));
// }else{
//     console.log('Please try again later')
// }

// Nested if statement
// Outer
// if (age >= 18) {
    // Inner
//     if (salary >= 5000) {
//         salary += bonus;
//         console.log('Salary: R'.concat(salary));
//     }else{
//         console.log('Your salary is less than R5000');
//     }
// }else{
//     console.log('You must be older than 18 years')
// }

// let items = ['Banana','Mango','Orange','Laptop','Mouse','Keyboard'];

// let ul = document.getElementById('items');

// items.forEach((e) => {
//     ul.innerHTML += `
//         <li> ${e} </li>    
//     `
// })

// items.forEach(display);
// function display(el) {
//     console.log(el)
// }


// for (let i = 0; i < items.length; i++) {
//     const element = items[i];
//     console.log(element)
// }

let bestFriends = ['Jared','Yasseen','Clayton','Daniel','Ikhlaas','Ridhaa','Reagon','Saleem','Ra-ees','Emile'];


let lastname= bestFriends[bestFriends.length - 1] ;
let midname = bestFriends[bestFriends.length / 2]
console.log(lastname);
console.log(midname);
