// Bài 2: Tạo menu như sau:
// -- CHỌN CHỨC NĂNG --

// Nhập mảng
// Xuất mảng
// Tìm số lớn nhất
// Tìm số nhỏ nhất
// Tính tổng
// Thoát

// Khi chọn 1: Gọi hàm để nhập mảng
// Khi chọn 2: Gọi hàm để xuất mảng
// Khi chọn 3: Gọi hàm tìm số lớn nhất trong mảng
// Khi chọn 4: Gọi hàm tìm số nhỏ nhất trong mảng
// Khi chọn 5: Gọi hàm tính tổng các số trong mảng
// Khi chọn 6: Thoát khỏi chương trình

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

function timMax(arr) {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
  }
  return max
}

function timMin(arr) {
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i]
  }
  return min
}

let n = 0
let arr = []

do {
  choose = prompt(`-- CHỌN CHỨC NĂNG --

    Nhập mảng
    Xuất mảng
    Tìm số lớn nhất
    Tìm số nhỏ nhất
    Tính tổng
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
      console.log(`Max la: ${timMax(arr)}`)
      break
    }
    case "4": {
      console.log(`Min la: ${timMin(arr)}`)
      break
    }
    case "5": {
      let tong = 0
      arr.forEach((element) => {
        tong += Number(element)
      })
      console.log("Tong la: " + tong)
      break
    }
    case "6": {
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
