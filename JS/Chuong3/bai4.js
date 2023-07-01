// Bài 4:
// Viết chương trình nhập đáy trên a, đáy dưới b và chiều cao h của một hình thang. Tính diện tích của hình thang này.

//khai bao chieu dai, chieu rong
var a = prompt("Nhập day tren: ")
var b = prompt("Nhập day duoi: ")
var h = prompt("Nhập chieu cao: ")

//tinh dien tich
const dienTich = (tren, duoi, cao) => {
  return ((number(tren) + number(duoi)) / 2) * number(cao)
}

//in ra màn hình
console.log("Dien tich la: " + dienTich(a, b, h))
