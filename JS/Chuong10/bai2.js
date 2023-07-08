// Bài tập 2: Cho mảng sinh viên gồm các thông tin như sau:
// const students = [
//     {
//         id: 1,
//         name: "Dinh",
//         address: "hue"
//     },
//     {
//         id: 2,
//         name: "Nam",
//         address: "quang nam"
//     },
//     {
//         id: 3,
//         name: "Tan",
//         address: "da nang"
//     },
//     {
//         id: 4,
//         name: "Hung",
//         address: "hue"
//     },
//     {
//         id: 5,
//         name: "Tri",
//         address: "quang tri"
//     },
//     {
//         id: 6,
//         name: "Anh",
//         address: "hue"
//     },
//     {
//         id: 7,
//         name: "Binh",
//         address: "da nang"
//     }
// ];
// Tạo menu chương trình như sau:
// == QUẢN LÝ SINH VIÊN ==

// Xem danh sách sinh viên
// Thêm sinh viên
// Sửa sinh viên
// Xóa sinh viên
// Khi chọn 1: Hiện thị tất cả sinh viên trong danh sách.
// Khi chọn 2: Nhập mới 1 sinh viên và thêm vào danh sách.
// Khi chọn 3: Sửa 1 sinh viên trong danh sách theo id nhập vào.
// Khi chọn 4: Xóa 1 sinh viên trong danh sách theo id nhập vào.

const students = [
  {
    id: 1,
    name: "Dinh",
    address: "hue",
  },
  {
    id: 2,
    name: "Nam",
    address: "quang nam",
  },
  {
    id: 3,
    name: "Tan",
    address: "da nang",
  },
  {
    id: 4,
    name: "Hung",
    address: "hue",
  },
  {
    id: 5,
    name: "Tri",
    address: "quang tri",
  },
  {
    id: 6,
    name: "Anh",
    address: "hue",
  },
  {
    id: 7,
    name: "Binh",
    address: "da nang",
  },
]

do {
  choose = prompt(`== QUẢN LÝ SINH VIÊN ==

  Xem danh sách sinh viên
  Thêm sinh viên
  Sửa sinh viên
  Xóa sinh viên`)
  let outFlag = false

  switch (choose) {
    case "1": {
      XemSinhVien()
      break
    }
    case "2": {
      ThemSinhVien()
      break
    }
    case "3": {
      SuaSinhVien()
      break
    }
    case "4": {
      XoaSinhVien()
      break
    }
    case "5": {
      outFlag = true
      console.log("Cút")
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

function XemSinhVien() {
  for (let data of students) {
    for (let detail in data) {
      console.log(detail + ": " + data[detail])
    }
    console.log("============")
  }
}

function ThemSinhVien() {
  let id = prompt("Nhap ma so vo")
  let name = prompt("Nhap ten vo")
  let address = prompt("Nhap dia chi vo")
  let sinhvien = {
    id,
    name,
    address,
  }
  students.push(sinhvien)
}

function SuaSinhVien() {
  let idFix = prompt("Nhap ma sinh vien can sua")
  let name = prompt("Nhap ten vo")
  let address = prompt("Nhap dia chi vo")
  students.forEach((student, index) => {
    if (student.id == idFix) {
      students[index].name = name
      students[index].address = address
    }
  })
}

function XoaSinhVien() {
  let idDel = prompt("Nhap ma sinh vien can xoa")
  students.students.splice(
    students.findIndex((sinhVien) => sinhVien.id == idDel),
    1
  )
}
