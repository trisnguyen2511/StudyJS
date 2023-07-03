// Bài 5: Cho 1 mảng
// var arrNumber = ['111', '222', '333', '444']
// Kiểm tra xem mảng có phần tử nào có giá trị bằng 222 không? Nếu có thì xoá nó đi
// Nếu mảng có phần tử có kiểu và giá trị bằng 444 thì thay thế phần tử đó thành '555'
// Đổi tất cả phần tử trong mảng ra kiểu số, in mảng đó ra màn hình

const arrNumber1 = ["111", "222", "333", "444"]
const tempArr = []

for (let i = 0; i < arrNumber1.length; i++) {
  if (arrNumber1[i] == "222") {
    arrNumber1.splice(i, 1)
  }
}

console.log(arrNumber1)

const arrNumber2 = ["111", "222", "333", "444"]

for (let i = 0; i < arrNumber2.length; i++) {
  if (arrNumber2[i] == "444") {
    arrNumber2.splice(i, 1, "555")
  }
}

console.log(arrNumber2)

const arrNumber3 = ["111", "222", "333", "444"]

for (let i = 0; i < arrNumber3.length; i++) {
  arrNumber3[i] = Number(arrNumber3[i])
}

console.log(arrNumber3)
