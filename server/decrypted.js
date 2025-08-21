import jwt from "jsonwebtoken";
// function to decrypt JWT back to original data
function decryptData()

{
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiZ2xvYmFsIGlzIGEgY2xnIiwiaWF0IjoxNzU1NjE3NTAzLCJleHAiOjE3NTU2MTgxMDN9.Wwn1G-s7F5f0Tvt-D_tBqhEXXYZh80dWzRRx1bvvZ9s"
let secretkey = "12345"
const decoded = jwt.verify(token,secretkey);
console.log("decrypted data:", decoded);


}

decryptData();