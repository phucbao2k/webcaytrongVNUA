import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
let createNewUser = (data)=>{
console.log(data);
console.log('hehe');
}
let hashUserPasswod =(password)=>{
    return new Promise((resolve, reject)=>{
r
    })
}
module.exports ={
    createNewUser:createNewUser,
}