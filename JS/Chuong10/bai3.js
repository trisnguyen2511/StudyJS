// Bài tập 3: Cho danh sách các đội bóng tham dự World Cup như sau:
// const danhSachDoiBong = [
//     {
//         id: 1,
//         ten: 'Brazin',
//         huanLuyenVien: 'Tite',
//         soLanVoDich: 15
//     },
//     {
//         id: 2,
//         ten: 'Đức',
//         huanLuyenVien: 'Hansi Flick',
//         soLanVoDich: 10
//     },
//     {
//         id: 3,
//         ten: 'Pháp',
//         huanLuyenVien: 'Deschamps',
//         soLanVoDich: 12
//     }
// ]
// Tạo menu như sau:
// Nhập dữ liệu
// Xuất dữ liệu
// Tìm thông tin
// Xóa thông tin đội bóng
// In những đội bóng có số lần vô địch lớn hơn 5
// Thoát
// Khi chọn 1: Nhập đội bóng tham gia World Cup.
// Khi chọn 2: Hiển thị thông tin các đội bóng đã nhập
// Khi chọn 3: Nhập vào id và hiển thị thông tin đội bóng có id đó. Nếu không có thì thông báo "Không tìm thấy"
// Khi chọn 4: Nhập vào id và xóa thông tin đội bóng có id đó. Nếu không có thì thông báo "Không tìm thấy đội bóng nào để xóa".
// Khi chọn 5: In thông tin những đội bóng có số lần vô địch lớn hơn 5
// Khi chọn 6: Thoát khỏi hệ thống và in ra dòng chữ: "Goodbye!"

const danhSachDoiBong = [
  {
    id: 1,
    ten: "Brazin",
    huanLuyenVien: "Tite",
    soLanVoDich: 15,
  },
  {
    id: 2,
    ten: "Đức",
    huanLuyenVien: "Hansi Flick",
    soLanVoDich: 10,
  },
  {
    id: 3,
    ten: "Pháp",
    huanLuyenVien: "Deschamps",
    soLanVoDich: 12,
  },
]

do {
  choose = prompt(`== QUẢN LÝ DOI BONG ==
  
  Nhập dữ liệu
  Xuất dữ liệu
  Tìm thông tin
  Xóa thông tin đội bóng
  In những đội bóng có số lần vô địch lớn hơn 5
  Thoát`)
  let outFlag = false

  switch (choose) {
    case "1": {
      NhapDuLieu()
      break
    }
    case "2": {
      XuatDuLieu()
      break
    }
    case "3": {
      TimKiemThongTin()
      break
    }
    case "4": {
      XoaDoiBong()
      break
    }
    case "5": {
      DoiBongLonHon5()
      break
    }
    case "6": {
      outFlag = true
      console.log("Goodbye!")
      break
    }
    default: {
      console.log("chon lai")
    }
  }
  if (outFlag) {
    break
  }
} while (true)

function NhapDuLieu() {
  let id = prompt("Nhap ma so vo")
  let ten = prompt("Nhap ten vo")
  let huanLuyenVien = prompt("Nhap ten huan luyen vien")
  let soLanVodich = prompt("Nhap so lan vo dich")
  let doiBong = {
    id,
    ten,
    huanLuyenVien,
    soLanVoDich: Number(soLanVodich),
  }
  danhSachDoiBong.push(doiBong)
}

function XuatDuLieu() {
  for (let data of danhSachDoiBong) {
    for (let detail in data) {
      console.log(detail + ": " + data[detail])
    }
    console.log("============")
  }
}

function TimKiemThongTin() {
  let id = prompt("Nhap ma doi bong can tiem")
  let doibongtim = danhSachDoiBong.find((doiBong) => doiBong.id == id)
  if (doibongtim) {
    console.log("== Doi bong do la ==")
    for (let detail in doibongtim) {
      console.log(detail + ": " + data[detail])
    }
    console.log("============")
  } else {
    console.log("Khong tim thay")
  }
}

function XoaDoiBong() {
  let idDel = prompt("Nhap ma doi bong can xoa")
  let doibongtim = danhSachDoiBong.findIndex((doiBong) => doiBong.id == id)
  if (doibongtim) {
    danhSachDoiBong.splice(doibongtim, 1)
  } else {
    console.log("Khong tim thay")
  }
}

function DoiBongLonHon5() {
  let doibongtim = danhSachDoiBong.filter((doiBong) => doiBong.soLanVoDich > 5)
  console.log(...doibongtim)
}
