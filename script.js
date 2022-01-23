// console.log(" Type the mobile number");
// console.log("Dialing");
// setTimeout(() => {
//     console.log("connected");
// }, 4000);
// console.log("call received");
// console.log("class end");



// Normal Call back function

// function myfun1() {
//     setTimeout(() => {
//         console.log("This is first function calling");
//     }, 1000);
// }

// function myfun2() {
//     console.log("This is second functin calling");
// }

// myfun1();

// console.log("Table-1 person ordered coffe");
// setTimeout(() => {
//     console.log("Table-2");
// }, 3000);


// console.log("Table-3")




// Airthamatic operation
// const compute = (n1, n2, callback) => callback(n1, n2);
// const add = (n1, n2) => n1 + n2;
// const div = (n1, n2) => n1 / n2;
// const mul = (n1, n2) => n1 * n2;

// console.log(compute(2, 3, add));
// console.log(compute(2, 3, div));
// console.log(compute(2, 3, mul));


// conver the string to uppercase and reverse the sttring

// function makeUpperCase(value) {
//     console.log(value.toUpperCase());
// }

// function reverseString(value) {
//     console.log(value.split("").reverse().join(""));
// }

// function handleName(name, callback) {
//     callback(name);
// }

// handleName("john", makeUpperCase);
// handleName("john", reverseString);



// Callback problem
// const myfun = (callback) => {
//     setTimeout(() => {
//         let data = ["Apple", "Mangoes", "kiwi", "Banana", "Graps"];
//         callback(false, data);
//     }, 4000);
// };

// const callback = (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// };
// myfun(callback);




// callback hell
const time = 1000;

// Raising a dough
function raisedough(callback) {
    console.log("waiting for dough");
    setTimeout(() => {
        console.log("Dough is ready!");
        callback();
    }, 3 * time);
}

// rolling a dough
function rollDough(callback) {
    console.log("Rolling a Dough");
    setTimeout(() => {
        console.log("Dough is rolled");
        callback();
    }, 2 * time);
}

// pour souce
function pourSause(callback) {
    console.log("pouring sauce...");
    setTimeout(() => {
        console.log("Sauce is poured!");
        callback();
    }, 1 * time);
}

function Addingtopping(callback) {
    console.log("Adding topping....");
    setTimeout(() => {
        console.log("Topping id added");
        callback();
    }, 3 * time);
}

function bakepizza(callback) {
    console.log("Baking pizza....");
    setTimeout(() => {
        console.log("pizza is baked");
        callback();
    }, 8 * time);
}

function delieverpizza(callback) {
    console.log("Deliering pizza...");
    setTimeout(() => {
        console.log("pizza is delivered");
        callback();
    }, 5 * time);
}

raisedough(() => {
    rollDough(() => {
        pourSause(() => {
            Addingtopping(() => {
                bakepizza(() => {
                    delieverpizza(() => {
                        console.log("your pizza id Delevered successfull");
                    })
                })
            })
        })
    })
})