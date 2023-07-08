// Bài 2: Cho mảng sinh viên như sau:
const students = [
  {
    id: 1,
    name: "Dinh",
    toan: 5,
    ly: 6,
    hoa: 7,
  },
  {
    id: 2,
    name: "Nam",
    toan: 10,
    ly: 8,
    hoa: 5,
  },
  {
    id: 3,
    name: "Tan",
    toan: 3,
    ly: 5,
    hoa: 5,
  },
  {
    id: 4,
    name: "Hung",
    toan: 9,
    ly: 7,
    hoa: 7,
  },
  {
    id: 5,
    name: "Tri",
    toan: 9,
    ly: 8,
    hoa: 9,
  },
  {
    id: 6,
    name: "Anh",
    toan: 8,
    ly: 10,
    hoa: 9,
  },
  {
    id: 7,
    name: "Binh",
    toan: 3,
    ly: 6,
    hoa: 9,
  },
]
// Tạo menu như sau: === QUẢN LÝ SINH VIÊN ===

// kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?
// kiểm tra xem có sinh viên nào xếp loại giỏi không?
// Lọc ra các sinh viên xếp loại giỏi
// Tìm 1 sinh viên xếp loại giỏi
// Cộng cho mỗi sinh viên 1 điểm toán
// Thêm thuộc tính tổng điểm 3 môn
// Tính tổng điểm của các sinh viên
// Tính điểm trung bình của các sinh viên
// Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
// Thoát
// Khi chọn 1: Duyệt mảng và kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?
// Khi chọn 2: Duyệt mảng và kiểm tra xem có sinh viên nào xếp loại giỏi không?
// Khi chọn 3: Lọc ra các sinh viên xếp loại giỏi và in ra
// Khi chọn 4: Tìm 1 sinh viên xếp loại giỏi và hiển thị
// Khi chọn 5: Cộng cho mỗi sinh viên 1 điểm toán
// Khi chọn 6: Thêm thuộc tính sum để lưu tổng điểm 3 môn
// Khi chọn 7: Tính tổng điểm của các sinh viên
// Khi chọn 8: Tính điểm trung bình của các sinh viên
// Khi chọn 9: Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
// Khi chọn 10: Thoát khỏi hệ thống và in ra dòng chữ: "Goodbye!"

do {
  choose = prompt(`=== QUẢN LÝ SINH VIÊN ===

  1: kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?
  2: kiểm tra xem có sinh viên nào xếp loại giỏi không?
  3: Lọc ra các sinh viên xếp loại giỏi
  4: Tìm 1 sinh viên xếp loại giỏi
  5: Cộng cho mỗi sinh viên 1 điểm toán
  6: Thêm thuộc tính tổng điểm 3 môn
  7: Tính tổng điểm của các sinh viên
  8: Tính điểm trung bình của các sinh viên
  9: Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
  10: Thoát`)
  let outFlag = false

  switch (choose) {
    case "1": {
      KiemTraTatCaSinhVienCacMonTrenTrungBinh()
      break
    }
    case "2": {
      KiemTraCoSinhVienXepLoaiGioi()
      break
    }
    case "3": {
      LocSinhVienGioi()
      break
    }
    case "4": {
      Tim1SinhVienGioi()
      break
    }
    case "5": {
      CongMoiSinhVien1DiemToan()
      break
    }
    case "6": {
      ThemThuocTinhSum()
      break
    }
    case "7": {
      TinhToanDiemTatCaSinhVien()
      break
    }
    case "8": {
      TinhDiemTrungBinhMoiSinhVien()
      break
    }
    case "9": {
      SapXepSinhVien()
      break
    }
    case "10": {
      outFlag = true
      console.log("Goodbye!")
      break
    }
    case "11": {
      for (let data of students) {
        for (let detail in data) {
          console.log(`${detail}: ${data[detail]}`)
        }
        console.log("============")
      }
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

function KiemTraTatCaSinhVienCacMonTrenTrungBinh() {
  let isBelowAve = false
  students.forEach((student) => {
    if (student.toan < 5 || student.ly < 5 || student.hoa < 5) isBelowAve = true
  })
  if (isBelowAve) {
    console.log("Co sinh vien duoi trung binh")
  } else {
    console.log("Khong co sinh vien duoi trung binh")
  }
}
function KiemTraCoSinhVienXepLoaiGioi() {
  let isGood = false
  students.forEach((student) => {
    if (
      student.toan >= 8 &&
      student.ly >= 8 &&
      student.hoa >= 8 &&
      //Con nua
      (student.toan + student.ly + student.hoa) / 3 >= 8
    )
      isGood = true
  })

  if (isGood) {
    console.log("Co sinh vien gioi")
  } else {
    console.log("Khong co sinh vien gioi")
  }
}

function LocSinhVienGioi() {
  let danhSachSinhVienGioi = students.filter((sinhVien) => {
    return (
      sinhVien.toan >= 8 &&
      sinhVien.ly >= 8 &&
      sinhVien.hoa >= 8 &&
      //Con nua
      (sinhVien.toan + sinhVien.ly + sinhVien.hoa) / 3 >= 8
    )
  })
  if (danhSachSinhVienGioi) {
    console.log("===Danh sach sinh vien gioi la===")
    for (let data of danhSachSinhVienGioi) {
      for (let detail in data) {
        console.log(detail + ": " + data[detail])
      }
      console.log("============")
    }
  } else {
    console.log("Khong co sinh vien gioi")
  }
}

function CongMoiSinhVien1DiemToan() {
  students.map((sinhvien) => {
    sinhvien.toan += 1
  })
  for (student in students) {
    if (student == "sum") ThemThuocTinhSum()
    break
  }
}

function Tim1SinhVienGioi() {
  const sinhVienGioi = students.find((sinhvien) => {
    return (
      sinhvien.toan >= 8 &&
      sinhvien.ly >= 8 &&
      sinhvien.hoa >= 8 &&
      //Con nua
      (sinhvien.toan + sinhvien.ly + sinhvien.hoa) / 3 >= 8
    )
  })

  if (sinhVienGioi) {
    console.log("===1 sinh vien gioi la===")
    for (let sv in sinhVienGioi) {
      console.log(sv + ": " + sinhVienGioi[sv])
    }
  } else {
    console.log("Khong co sinh vien gioi")
  }
}
function ThemThuocTinhSum() {
  students.map((student) => {
    student.sum =
      Number(student.toan) + Number(student.ly) + Number(student.hoa)
  })
}

function TinhToanDiemTatCaSinhVien() {
  students.forEach((student) => {
    let sum = Number(student.toan) + Number(student.ly) + Number(student.hoa)
    console.log("Tong diem cua Sinh vien " + student.name + " la: " + sum)
  })
}

function TinhDiemTrungBinhMoiSinhVien() {
  students.forEach((student) => {
    let avg =
      Number(student.toan) + Number(student.ly) + Number(student.hoa) / 3
    console.log(
      "Diem trung binh cua Sinh vien " + student.name + " la: " + avg.toFixed(2)
    )
  })
}
function SapXepSinhVien() {
  students.sort((prev, next) => {
    let sumPrev = Number(prev.toan) + Number(prev.ly) + Number(prev.hoa)
    let sumNext = Number(next.toan) + Number(next.ly) + Number(next.hoa)
    return sumPrev - sumNext
  })
}
