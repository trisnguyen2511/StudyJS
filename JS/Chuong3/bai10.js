//khoi tao check = true
var check = true

//Nhap chieu dai
var chieuDai = prompt("Nhập chiều dài: ")

//Kiẻm tra chiều dài hợp lệ
if (chieuDai == "" || chieuDai == null) {
  console.log("Vui lòng nhập chiều dài!")
  check = false
} else if (isNaN(chieuDai)) {
  // Kiểm tra is not a number
  console.log("Nhập chiều dài không đúng định dạng số!")
  check = false
} else if (chieuDai <= 0) {
  // Kiểm tra số dương
  console.log("Chiều dài phải lớn hơn 0")
  check = false
}

//nhâpj chiều rộng
var chieuRong = prompt("Nhập chiều rộng: ")

if (chieuRong == "" || chieuRong == null) {
  //Kiểm tra có nhập chiều rộng
  console.log("Vui lòng nhập chiều rộng!")
  check = false
} else if (isNaN(chieuRong)) {
  // Kiểm tra chiều rộng là số
  console.log("Nhập chiều rộng không đúng định dạng số!")
  check = false
} else if (chieuRong <= 0) {
  // Kiểm tra chièu rộng là số dương
  console.log("Chiều rộng phải lớn hơn 0")
  check = false
}

// Nếu kểm tra không bị lỗi thì tính chu vi và diện tích hình chữ nhật
if (check) {
  var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2
  var dienTich = chieuDai * chieuRong

  console.log("Chu vi: " + chuVi)
  console.log("Dien tich: " + dienTich)
}
