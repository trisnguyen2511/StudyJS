// function tinh() {
//   const chieudai = document.getElementsByName("chieudai")[0].innerText
//   const chieurong = document.getElementsByName("chieurong")[0].innerText

//   const result = document.getElementById("result")

//   const chuvi = document.createElement("div")
//   chuvi.innerText = (Number(chieudai) + Number(chieurong)) * 2
//   result.appendChild(chuvi)

//   const dientich = document.createElement("div")
//   dientich.innerText = Number(chieudai) * Number(chieurong)
//   result.appendChild(dientich)
// }

let form = document.getElementById("form")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  //init lai ban dau

  //check
  const chieudai = document.getElementsByName("chieudai")[0]
  const chieurong = document.getElementsByName("chieurong")[0]
  const result = document.getElementById("result")

  if (chieudai.value && chieurong.value) {
    const chuvi = document.createElement("div")
    chuvi.innerText =
      "Chu vi: " + (Number(chieudai.value) + Number(chieurong.value)) * 2
    result.appendChild(chuvi)

    const dientich = document.createElement("div")
    dientich.innerText =
      "Dien tich: " + Number(chieudai.value) * Number(chieurong.value)
    result.appendChild(dientich)
  } else {
    const error = document.createElement("div")
    error.setAttribute("style", "color: red;")
    error.innerText = "Vui lòng nhập đầy đủ thông tin vào"
    result.appendChild(error)

    const formMessage1 = document.getElementsByClassName("form-message")[0]
    const formMessage2 = document.getElementsByClassName("form-message")[1]

    if (!chieudai.value) {
      formMessage1.style.color = "red"
      formMessage1.innerText = "Vui lòng nhập"
      chieudai.setAttribute(
        "style",
        "border-radius: 10%;border-color: red;border-width: medium;"
      )
    }
    if (!chieurong.value) {
      formMessage2.style.color = "red"
      formMessage2.innerText = "Vui lòng nhập"
      chieurong.setAttribute(
        "style",
        "border-radius: 10%;border-color: red;border-width: medium;"
      )
    }
  }
})
