const name = "David";

function  toUpper (text) 
{ 
    const upperCase = text.toUpperCase();
    console.log (upperCase);
}

toUpper();

const user = {
    Name: "jack",
    Age: 30,
    Location: "Texas",
    greet: function () {
    return `Hello, my name is ${this.name}!`;
    },
};