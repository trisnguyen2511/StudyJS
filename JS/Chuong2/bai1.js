// Khai báo 3 biến chứa thông tin : Họ tên, tuổi, địa chỉ
// In ra thông tin này sau 2 giây
// Sử dụng comment để ghi chú những đoạn mã

//Khai bao ho ten
let Hoten = "Nguyen Hoang Tri"
// Khai báo tuổi
let Tuoi = 23
// Khai bảo địa chỉ
let DiaChi = "Go Vap, TP.HCM"

// Dùng setTimeout để delay lại 2s
setTimeout(function () {
  console.log(Hoten)
  console.log(Tuoi)
  console.log(DiaChi)
}, 2000)
