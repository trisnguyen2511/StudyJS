// Bài 1: Viết chương trình nhập 1 mảng, sau đó xuất mảng vừa nhập ra màn hình

function NhapMang(n, arr) {
  for (let i = 0; i < n; i++) {
    arr[i] = prompt(`Nhap so thu ${i}`)
  }
}

function XuatMang(arr) {
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

let n = prompt("nhap so luong mang")
let arr = []

NhapMang(n, arr)
XuatMang(arr)
