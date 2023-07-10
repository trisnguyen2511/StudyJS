// Bài 4: Viết chương trình có sử dụng hàm
// nhập 1 mảng các số nguyên
// nhân 3 giá trị mỗi phần tử trong mảng (dùng map)
// xuất mảng mới ra màn hình.
// tính tổng các phần tử trong mảng (dùng reduce)
// kiểm tra xem thử có phải tất cả các phần tử đều lớn hơn 5 không? (dùng every)
// kiểm tra xem thử có phần tử nào lớn hơn 5 không? (dùng some)

let arr = [1, 1, 1, 8]

function nhapNang() {
  let n = prompt("Nhap so luong so nguyen")
  for (let i = 0; i < Number(n); i++) {
    arr[i] = Number(prompt("Nhap phan tu thu " + i))
  }
}

function Nhan3GiaTri() {
  return arr.map((number) => {
    return number * 3
  })
  // arr.forEach((element, index) => {
  //   return (arr[index] *= 3)
  // })
}

function XuatMang(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function tongMang(arr) {
  return arr.reduce((prev, curr) => {
    return (curr += prev)
  }, 0)
}

function kiemTraTatCaLonHon5(arr) {
  let checkAllMore5 = arr.every((number) => {
    return number > 5
  })
  if (checkAllMore5) {
    console.log("Tat ca lon hon 5")
  } else {
    console.log("Tat ca khong lon hon 5")
  }
}

const kiemTraPhanTuLonHon5 = (arr) => {
  let checkSomeMore5 = arr.some((number) => {
    return number > 5
  })
  if (checkSomeMore5) {
    console.log("Co phan tu lon hon 5")
  } else {
    console.log("Khong co phan tu lon hon 5")
  }
}

// nhapNang()
arr = Nhan3GiaTri(arr)
// Nhan3GiaTri()
XuatMang(arr)
console.log("tong mang la: " + tongMang(arr))
kiemTraTatCaLonHon5(arr)
kiemTraPhanTuLonHon5(arr)
