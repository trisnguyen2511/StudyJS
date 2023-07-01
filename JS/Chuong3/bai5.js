// Bài 5:
// Viết chương trình nhập bán kính R của hình tròn. Tính chu vi và diện tích của hình tròn đó.

//Khai báo bán kình
let R = prompt("Nhap ban kinh")

// tinh chu vi
const chuvi = (r) => {
  return 2 * 3.14 * r
}

//tinh dien tich
const dienTich = (r) => {
  return Math.pow(r, 2) * 3.14
}

//in ra màn hình
console.log("Chu vi la: " + chuvi(Number(R)))
console.log("Dien tich la: " + dienTich(Number(R)))
