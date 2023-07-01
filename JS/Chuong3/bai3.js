// Bài 3:
// Viết chương trình nhập chiều dài một cạnh của hình vuông. Tính chu vi và diện tích của hình vuông đó.

//khai bao chieu dai canh
let chieuDaiCanh

//Nhap so a
do {
  chieuDaiCanh = prompt("Nhap chieu dai canh")
} while (!isNumeric(chieuDaiCanh))

//Tinh chu vi
const chuvi = (chieuDaiCanh) => {
  return Number(chieuDaiCanh) * 4
}

//Tinh dien tich
const dienTich = (chieuDaiCanh) => {
  return Number(chieuDaiCanh) * Number(chieuDaiCanh)
}

//Kiem tra Lại rồi xuất ra
if (isNumeric(chieuDaiCanh)) {
  console.log("Chu vi la: " + chuvi(chieuDaiCanh))
  console.log("Dien tich la: " + dienTich(chieuDaiCanh))
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
