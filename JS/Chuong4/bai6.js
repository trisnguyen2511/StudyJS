// Bài 6: Viết chương trình (có sử dụng hàm) kiểm tra xem 1 số có phải là số hoàn hảo không?
const checkSHH = (a) => {
  let Tong = 0
  let i = 1
  while (i < a - 1) {
    if (a % i === 0) {
      Tong += i
    }
    i++
  }
  if (Tong === a) return true
  return false
}

let a = prompt("nhap so kiem tra SHH")
if (checkSHH(Number(a))) {
  console.log("la SHH")
} else console.log("khong la SHH")
