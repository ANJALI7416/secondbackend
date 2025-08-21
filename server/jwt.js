import jwt from "jsonwebtoken";

function encryptdata(){
let message = "global is a clg";

let encryptmessage = jwt.sign({message},"8255",{expiresIn:"10m",});
console.log(encryptmessage);
}
encryptdata();
