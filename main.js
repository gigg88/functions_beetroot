
//Task 1: Pure Function Practice

//Write a pure function named calculateArea that takes two arguments, length, and width, 
//and returns the area of a rectangle. Explain why your function is considered pure.

function calculateArea(length, width) {
    return length * width;
}

const area = calculateArea(50, 50);
console.log(`The area is: ${area}`);


//Take a regular function declaration (e.g., function add(a, b) { return a + b; }) and convert it into an arrow function. 
//Explain the differences in syntax and behavior between the two forms.

function addH(a,b) {
    return a + b;
}

const add = (a,b) => {
    return a + b;
}

//Task 3: Closure Challenge

//Write a function createCounter that returns an object with two methods: increment and getValue.
//The increment method should increase a counter variable by 1, and getValue should return the current 
//value of the counter. Ensure that the counter variable is encapsulated within the closure.


function createCounter(){

    let count = 0;

    return {
        increment: function(){
            count++;
        },
        getValue: function(){
            return count;
        }
        
    };
    
}

const showCount = createCounter();

showCount.increment();

console.log(showCount.getValue());


//Task 5: Practical Function Application

//Choose a real-world scenario (e.g., calculating shopping cart totals, filtering a list of items) and write a JavaScript
//function to solve the problem. Apply the concepts of parameters, return values, and potentially closures if needed.


const products = {
    "apple": 1.5,
    "banana": 0.8,
    "orange": 1.2,
    "milk": 2.5,
    "bread": 2.0
  };

  console.log(products);

  

  const shoppingCartArray = [];

  function addProductToCart() {
    const productName = prompt("Add product to cart: ");

    if (productName && products[productName]) {
        shoppingCartArray.push({
            productName,
            price: products[productName]
        });
        console.log(shoppingCartArray)
    }
  }

  addProductToCart();

  
