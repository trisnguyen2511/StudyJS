// Bài 2: Viết chương trình (có sử dụng hàm) giải phương trình bậc 2: ax^2 + bx + c = 0 (xét tất cả các trường hợp).
let a = prompt("Nhap so a")
let b = prompt("Nhap so b")
let c = prompt("Nhap so c")

function GiaiphuongTrinhBac1(a, b) {
  if (a === 0) {
    console.log("Phương trình vô số nghiệm")
  } else {
    let nghiem = -b / a
    console.log("phương trình có nghiệm là: " + nghiem.toFixed(2))
  }
}

function GiaiphuongTrinhBac2(a, b, c) {
  if (a === 0) {
    GiaiphuongTrinhBac1(a, b)
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

GiaiphuongTrinhBac2(Number(a), Number(b), Number(c))
