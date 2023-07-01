// Bài 2:
// Viết chương trình nhập chiều dài a, chiều rộng b của hình chữ nhật. Tính chu vi và diện tích của hình chữ nhật đó.

//khai bao chieu dai, chieu rong
let chieuDai, chieuRong

//Nhap so a
do {
  chieuDai = prompt("Nhap chieu dai")
} while (!isNumeric(chieuDai))

// Nhap so b
do {
  chieuRong = prompt("Nhap chieu rong")
} while (!isNumeric(chieuRong))

const chuvi = (chieuDai, chieuRong) => {
  return (Number(chieuDai) + Number(chieuRong)) * 2
}

const dienTich = (chieuDai, chieuRong) => {
  return Number(chieuDai) * Number(chieuRong)
}

//Kiem tra Lại rồi xuất ra
if (isNumeric(chieuDai) && isNumeric(chieuRong)) {
  console.log("Chu vi la: " + chuvi(chieuDai, chieuRong))
  console.log("Dien tich la: " + dienTich(chieuDai, chieuRong))
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
