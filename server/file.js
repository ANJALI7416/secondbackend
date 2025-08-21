// How to use dotenv package
// npm install dotnet
// touch .env
// add this in .evn file
// PASSWORD = 123456;
// come to file.js or main file
// add this code

import dotenv from  "dotenv"
dotenv.config();

let pass = process.env.INSTAPASSWORD;
console.log(pass)

let pass1 = "123456"
console.log(pass1)

let myage = process.env.age;
console.log(myage)

let pass2 = process.env.email;
console.log(pass2)