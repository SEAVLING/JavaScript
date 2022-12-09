const  text = (word) => (person_name) => `${word} ${person_name}!`;

let hello = text("Hello");
let welcome = text("Welcome");

console.log(hello("Seakngim"));