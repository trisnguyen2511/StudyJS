// Bài 3: Tạo menu như sau:
// -- CHỌN CHỨC NĂNG --

// Nhập mảng
// Xuất mảng
// In số nguyên tố
// In số hoàn hảo
// Đếm số 0
// Đếm số nguyên tố
// Đếm số hoàn hảo
// Thoát
// Khi chọn 1: Gọi hàm tạo mảng gồm 100 phần tử là các số ngẫu nhiên từ 0 -> 99
// Khi chọn 2: Gọi hàm xuất mảng
// Khi chọn 3. In các số nguyên tố trong mảng
// Khi chọn 4. In các số hoàn hảo trong mảng
// Khi chọn 5. Đếm xem có bao nhiêu phần tử 0 trong mảng
// Khi chọn 6. Đếm xem có bao nhiêu số nguyên tố trong mảng
// Khi chọn 7. Đếm xem có bao nhiêu số hoàn hảo trong mảng
// Khi chọn 8. Thoát khỏi chương trình

function NhapMang(n, arr) {
  n = prompt("Nhap so luong phan tu")
  for (let i = 0; i < n; i++) {
    arr[i] = prompt(`Nhap so thu ${i + 1}`)
  }
}

function XuatMang(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

const checkSNT = (a) => {
  if (a === 2) return true
  let demSNT = 0
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      demSNT += 1
    }
  }
  if (demSNT === 0) {
    return true
  }
  return false
}

const checkSHH = (a) => {
  let Tong = 0
  let i = 1
  while (i < a - 1) {
    if (a % i === 0) {
      Tong += i
    }
    i++
  }
  if (Tong === a) return true
  return false
}

let n = 0
let arr = []

do {
  choose = prompt(`-- CHỌN CHỨC NĂNG --

  Nhập mảng
  Xuất mảng
  In số nguyên tố
  In số hoàn hảo
  Đếm số 0
  Đếm số nguyên tố
  Đếm số hoàn hảo
  Thoát`)
  let outFlag = false

  switch (choose) {
    case "1": {
      NhapMang(n, arr)
      break
    }
    case "2": {
      XuatMang(arr)
      break
    }
    case "3": {
      console.log("Day SNT la: ")
      arr.forEach((element) => {
        if (checkSNT(Number(element))) console.log(element)
      })
      break
    }
    case "4": {
      console.log("Day SHH la: ")
      arr.forEach((element) => {
        if (checkSHH(Number(element))) console.log(element)
      })
      break
    }
    case "5": {
      let soLuong0 = 0
      arr.forEach((element) => {
        if (element == 0) soLuong0 += 1
      })
      console.log("So luong 0 la: " + soLuong0)
      break
    }
    case "6": {
      let soluongNT = 0
      arr.forEach((element) => {
        if (checkSNT(Number(element))) soluongNT += 1
      })
      console.log("So luong so nguyen to la: " + soluongNT)
      break
    }
    case "7": {
      let soluongSHH = 0
      arr.forEach((element) => {
        if (checkSHH(Number(element))) soluongSHH += 1
      })
      console.log("So luong so hoan hao la: " + soluongSHH)
      break
    }
    case "8": {
      outFlag = true
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
