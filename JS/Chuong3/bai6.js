// Bài 6:
// Viết chương trình nhập 2 số a, b. Tính tích, thương, số dư của 2 số a, b.

//Khai báo bán kình
let a = prompt("Nhap a")
let b = prompt("Nhap b")

//Tính tích
var tich = Number(a) * Number(b)
//Tính thương
var thuong = a / b
//Tính số dư
var sodu = a % b

console.log("Tích: " + tich)
console.log("Thương: " + thuong)
console.log("Số dư: " + sodu)
