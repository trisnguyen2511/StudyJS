// Bài 4: Viết chương trình sử dụng hàm truyền vào một dãy số sau đó:
// in dãy số đã nhập
// Tính tổng của dãy số
// Tìm số lớn nhất
// Tìm số nhỏ nhất
// Sử dụng đối tượng arguments

function bai4() {
  let a = []
  let tong = 0
  let max = 0
  let min = 999

  max = arguments[0]
  min = arguments[0]

  for (let param of arguments) {
    console.log(param)
    tong += Number(param)
    if (param > max) max = param
    if (param < min) min = param
  }

  console.log(`tong = ${tong}`)
  console.log(`max = ${max}`)
  console.log(`min = ${min}`)
}

function tinhTong() {
  let tong = 0
  for (let i = 0; i < arguments.length; i++) {
    tong += Number(arguments[i])
  }
  return tong
}

console.log(tinhTong(1, 5, 7, 9, 1, 3, 5))

function timMax() {
  let max = arguments[0]
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) max = arguments[i]
  }
  return max
}

console.log(timMax(1, 5, 7, 9, 1, 3, 5))

function timMin() {
  let min = arguments[0]
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < min) min = arguments[i]
  }
  return min
}

console.log(timMin(1, 5, 7, 9, 1, 3, 5))

// bai4(1, 5, 7, 9, 1, 3, 5)
