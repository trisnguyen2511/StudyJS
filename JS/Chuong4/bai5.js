// Bài 5: Viết chương trình (có sử dụng hàm) kiểm tra xem 1 số có phải là số nguyên tố không?
const checkSNT = (a) => {
  if (a === 2) return true
  let demSNT = 0
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      demSNT += 1
    }
  }
  if (demSNT === 0) {
    return true
  }
  return false
}

let a = prompt("nhap so kiem tra snt")
if (checkSNT(Number(a))) {
  console.log("la snt")
} else console.log("khong la snt")
