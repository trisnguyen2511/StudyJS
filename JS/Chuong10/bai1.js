// Bài tập 1: Viết chương trình mô phỏng từ điển Anh Việt
// Tạo menu chương trình như sau:
// == TỪ ĐIỂN ANH VIỆT ==

// Nhập dữ liệu
// Xuất dữ liệu
// Dịch từ
// Thoát
// Khi chọn 1: Nhập thông tin các từ (gồm 2 thuộc tính: từ tiếng Anh và nghĩa tiếng Việt) từ bàn phím.
// Khi chọn 2: Hiển thị thông tin các từ đã nhập.
// Khi chọn 3: Nhập vào một từ tiếng Anh bất kỳ, tìm kiếm trong từ điển, nếu có thì in nghĩa tiếng Việt của từ đó. Nếu không có thì in ra không tìm thấy.
// Khi chọn 4: Thoát khỏi chương trình và in ra dòng chữ "Cảm ơn đã sử dụng từ điển!"

let objectDictionary = [
  {
    English: "hi",
    Vietnamese: "Chao",
  },
  {
    English: "hello",
    Vietnamese: "Xin chao",
  },
]

do {
  choose = prompt(`== TỪ ĐIỂN ANH VIỆT ==

    Nhập dữ liệu
    Xuất dữ liệu
    Dịch từ
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
      DichTu()
      break
    }
    case "4": {
      outFlag = true
      console.log("Cảm ơn đã sử dụng từ điển!")
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
  let tiengAnh = prompt("Nhap tu tieng Anh")
  let tiengViet = prompt("Nhap nghia tieng Viet")
  let object = {
    English: tiengAnh,
    Vietnamese: tiengViet,
  }
  objectDictionary.push(object)
}

function XuatDuLieu() {
  for (let data of objectDictionary) {
    for (let detail in data) {
      console.log(detail + ": " + data[detail])
    }
    console.log("============")
  }
}

function DichTu() {
  let trans = prompt("Nhap tu can dich")

  const result = objectDictionary.find((word) => word["English"] == trans)
  if (result) console.log("Dich ra la: " + result["Vietnamese"])
  else console.log("Khong tim thay")
  //   console.log("Dich ra la: " + data["Vietnamese"])
  //   }
  //   let flag = false
  //   for (let data of objectDictionary) {
  //     if (data["English"] == trans) {
  //       console.log("Dich ra la: " + data["Vietnamese"])
  //       flag = true
  //     }
  //   }
  //   if (!flag) {
  //     console.log("Khong tim thay")
  //   }
}
