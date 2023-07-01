// Bài 8:
// Viết chương trình giải phương trình bậc 1: ax + b = 0 (xét tất cả các trường hợp, làm tròn kết quả 2 số thập phân).

let a = prompt("Nhap so a")
let b = prompt("Nhap so b")

function GiaiphuongTrinhBac1(a, b) {
  if (a === 0) {
    console.log("Phương trình vô số nghiệm")
  } else {
    let nghiem = -b / a
    console.log("phương trình có nghiệm là: " + nghiem.toFixed(2))
  }
}

GiaiphuongTrinhBac1(Number(a), Number(b))
