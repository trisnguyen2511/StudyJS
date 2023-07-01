// Viết chương trình nhập vào 3 số a, b, c. Kiểm tra xem 3 số đó có lập thành 1 tam giác không? Đó là tam giác gì?

//khoi tao check = true
var check = true

//Nhap canh
var canh1 = prompt("Nhập cạnh 1: ")

//Kiẻm tra cạnh 1 hợp lệ
if (canh1 == "" || canh1 == null) {
  console.log("Vui lòng nhập cạnh 1 !")
  check = false
} else if (isNaN(canh1)) {
  // Kiểm tra is not a number
  console.log("Nhập cạnh 1 không đúng định dạng số!")
  check = false
} else if (canh1 <= 0) {
  // Kiểm tra số dương
  console.log("Cạnh 1 phải lớn hơn 0")
  check = false
}

//Nhap canh
var canh2 = prompt("Nhập cạnh 2: ")

//Kiẻm tra cạnh 2 hợp lệ
if (canh2 == "" || canh2 == null) {
  console.log("Vui lòng nhập cạnh 2!")
  check = false
} else if (isNaN(canh2)) {
  // Kiểm tra is not a number
  console.log("Nhập cạnh 2 không đúng định dạng số!")
  check = false
} else if (canh2 <= 0) {
  // Kiểm tra số dương
  console.log("Cạnh 2 phải lớn hơn 0")
  check = false
}

//Nhap canh
var canh3 = prompt("Nhập cạnh 3: ")

//Kiẻm tra cạnh 3 hợp lệ
if (canh3 == "" || canh3 == null) {
  console.log("Vui lòng nhập cạnh 3!")
  check = false
} else if (isNaN(canh3)) {
  // Kiểm tra is not a number
  console.log("Nhập cạnh 3 không đúng định dạng số!")
  check = false
} else if (canh3 <= 0) {
  // Kiểm tra số dương
  console.log("Cạnh 3 phải lớn hơn 0")
  check = false
}

if (check) {
  if (
    Number(canh1) + Number(canh2) > Number(canh3) &&
    Number(canh1) + Number(canh3) > Number(canh2) &&
    Number(canh2) + Number(canh3) > Number(canh1)
  ) {
    if (canh1 == canh2 && canh2 == canh3) {
      console.log("Tam giác đều")
    } else if (canh1 == canh2 || canh2 == canh3 || canh1 == canh3) {
      console.log("Tam giác cân")
    } else if (
      canh1 * canh1 == canh2 * canh2 + canh3 * canh3 ||
      canh2 * canh2 == canh1 * canh1 + canh3 * canh3 ||
      canh3 * canh3 == canh1 * canh1 + canh2 * canh2
    ) {
      console.log("Tam giác vuông")
    } else {
      console.log("Tam giác bình thường")
    }
  } else {
    console.log("Tam giác gì lạ lắm")
  }
}
