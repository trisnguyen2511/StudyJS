// Bài 7: Viết chương trình có sử dụng hàm nhận vào 1 dãy số => in ra các số nguyên tố trong dãy đó
function writeSNT() {
  for (let i = 0; i < arguments.length; i++) {
    if (checkSNT(arguments[i])) {
      console.log(arguments[i])
    }
  }
}

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

writeSNT(1, 2, 5, 6, 78, 3, 4, 6, 7, 23, 2)
