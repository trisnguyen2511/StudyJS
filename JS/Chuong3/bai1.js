// Bài 1:
// Viết chương trình nhập 2 số a, b. Tính tổng và hiệu của 2 số đó rồi in kết quả ra màn hình.

//khai bao a b
let a, b

//Nhap so a
do {
  a = prompt("Nhap so a")
} while (!isNumeric(a))

// Nhap so b
do {
  b = prompt("Nhap so b")
} while (!isNumeric(b))

//Kiem tra Lại rồi xuất ra
if (isNumeric(a) && isNumeric(b)) {
  console.log(Number(a) + Number(b))
  console.log(Number(a) - Number(b))
} else {
  console.log("Khong hop le")
}

//Kiểm tra có phải là số hay không ?
function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(Number(str))
  ) // ...and ensure strings of whitespace fail
}

//--//
// Viết chương trình nhập 2 số a, b. Tính tổng và hiệu của 2 số đó rồi in kết quả ra màn hình.

// var a = prompt("Nhập a: ")
// var b = prompt("Nhập b: ")

// var tong = Number(a) + Number(b) // chuyển từ kiểu string sang kiểu dữ liệu number
// var hieu = a - b

// console.log("Tổng: " + tong)
// console.log("Hiệu: " + hieu)
