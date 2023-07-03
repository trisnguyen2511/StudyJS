// Bài 6: Áp dụng những gi học được ở bài 4 để làm bài sau:
// Tạo menu như sau:
// -- CHỌN CHỨC NĂNG --

// Tạo mảng
// Xuất mảng
// Đảo mảng
// Sắp xếp mảng
// Tìm 1 số
// Thoát
// Khi chọn 1: Gọi hàm tạo mảng gồm 10 phần tử là các số ngẫu nhiên từ 0 đến 100
// Khi chọn 2: Gọi hàm xuất mảng
// Khi chọn 3: Gọi hàm đảo các phần tử của mảng
// Khi chọn 4: Gọi hàm sắp xếp các phần tử của mảng theo thứ tự tăng dần
// Khi chọn 5: Gọi hàm nhập 1 số bất kỳ rồi tìm số đó trong mảng, nếu có thì in chỉ số của phần tử tìm thấy, nếu không thì in "Không tìm thấy"
// Khi chọn 6: Thoát khỏi chương trình

// Hàm tạo số ngẫu nhiên trong khoảng 0 đến max-1
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function XuatMang(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function DaoMang(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i]
    arr[i] = arr[arr.length - i - 1]
    arr[arr.length - i - 1] = temp
  }
}

// Hàm sắp xếp nổi bọt
function bubbleSort(array) {
  var size = array.length

  for (var i = 0; i < size - 1; i++) {
    for (var j = 0; j < size - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
}

function countNumber(number, array) {
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] == number) count += 1
  }
  return count
}

let arrayNumber = []

do {
  choose = prompt(`-- CHỌN CHỨC NĂNG --

  Tạo mảng
  Xuất mảng
  Đảo mảng
  Sắp xếp mảng
  Tìm 1 số
  Thoát`)
  let outFlag = false

  switch (choose) {
    case "1": {
      for (let i = 0; i < 10; i++) {
        arrayNumber.push(getRandomInt(100))
      }
      break
    }
    case "2": {
      XuatMang(arrayNumber)
      break
    }
    case "3": {
      DaoMang(arrayNumber)
      break
    }
    case "4": {
      bubbleSort(arrayNumber)
      break
    }
    case "5": {
      var input = prompt("Nhập số muốn tìm: ")
      var idx = countNumber(input, arrayNumber)
      if (idx != -1) {
        console.log("So luong số " + input + " là: " + idx)
      } else {
        console.log("Khong tim thay")
      }
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
