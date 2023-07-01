// Bài 7:
// Viết chương trình nhập vào 1 số rồi kiểm tra xem đó là số chẵn hay số lẻ.

//Khai báo bán kình
let a = prompt("Nhap so")

const kiemTraChanLe = (a) => {
  if (a % 2 === 0) {
    console.log("Là số chẵn")
  } else {
    console.log("Là số lẻ")
  }
}

kiemTraChanLe(a)
