// Bài 9:
// Viết chương trình giải phương trình bậc 2: ax^2 + bx + c = 0 (xét tất cả các trường hợp, làm tròn kết quả 2 số thập phân).

let a = prompt("Nhap so a")
let b = prompt("Nhap so b")
let c = prompt("Nhap so c")

function GiaiphuongTrinhBac2(a, b, c) {
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

GiaiphuongTrinhBac2(Number(a), Number(b), Number(c))
