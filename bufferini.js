//Buffer always store val in hexadecimal form
// let arr=[1,2,3];
// let buffer=Buffer.from(arr);
// console.log(buffer);
let str1="ABC"
let bufferval1=Buffer.from(str1);
let str2=" XYZ"
let bufferval2=Buffer.from(str2);

let combinbuffer=Buffer.concat([bufferval1,bufferval2]);
console.log(bufferval1);
console.log(bufferval2);
console.log(combinbuffer);
console.log(combinbuffer.toString());