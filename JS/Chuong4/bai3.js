// Bài 3: Tạo menu như sau:
// == GIẢI PHƯƠNG TRÌNH ==

// BẬC 1
// BẬC 2
// THOÁT
// Khi chọn 1: Gọi hàm giải phương trình bậc 1
// Khi chọn 2: Gọi hàm giải phương trình bậc 2
// Khi chọn 3: Thoát khỏi chương trình và in ra dòng chữ "Good Bye!"

function GiaiphuongTrinhBac1(a, b) {
  if (a == 0 && b == 0) {
    console.log("Phương trình vô số nghiệm")
  } else if (a == 0 && b != 0) {
    console.log("Phương trình vô nghiệm!")
  } else {
    let nghiem = -b / a
    console.log("phương trình có nghiệm là: " + nghiem.toFixed(2))
  }
}

function GiaiphuongTrinhBac2(a, b, c) {
  if (a == 0) {
    GiaiphuongTrinhBac1(b, c)
  } else {
    let delta = Math.pow(b, 2) - 4 * a * c

    if (delta < 0) {
      console.log("Phương trình vô nghiệm")
    } else if (delta === 0) {
      console.log("Phuong trinh co 2 nghiem kep la: " + -b / (2 * a))
    } else if (delta > 0) {
      console.log("Phương trình co hai nghiem")
      let x1 = (-b + Math.sqrt(delta)) / (2 * a)
      let x2 = (-b - Math.sqrt(delta)) / (2 * a)
      console.log(x1, x2)
    }
  }
}

console.log(`BẬC 1
BẬC 2
THOÁT
`)

let choose

do {
  choose = prompt(`BẬC 1
BẬC 2
THOÁT`)
  let outFlag = false
  switch (choose) {
    case "1": {
      let a = prompt("Nhap so a")
      let b = prompt("Nhap so b")
      GiaiphuongTrinhBac1(a, b)
      break
    }
    case "2": {
      let a = prompt("Nhap so a")
      let b = prompt("Nhap so b")
      let c = prompt("Nhap so c")
      GiaiphuongTrinhBac2(a, b, c)
      break
    }
    case "3": {
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
