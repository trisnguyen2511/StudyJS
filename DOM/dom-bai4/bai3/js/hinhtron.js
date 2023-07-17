let form = document.getElementById("form")

const errorInit = document.getElementById("error")
errorInit.setAttribute(
  "style",
  "color: red;text-align: center;font-size: larger;font-weight: bold;"
)

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const bankinh = document.getElementById("bankinh")
  const dientich = document.getElementById("dientich")
  const error = document.getElementById("error")

  //init
  error.innerText = ""

  if (
    (bankinh.value && dientich.value) ||
    (!bankinh.value && !dientich.value)
  ) {
    error.innerText = "Vui lòng nhập lại!"
  } else {
    if (bankinh.value) {
      dientich.value = (
        Number(bankinh.value) *
        Number(bankinh.value) *
        3.14
      ).toFixed(2)
    }
    if (dientich.value) {
      bankinh.value = Math.sqrt(Number(dientich.value) / 3.14).toFixed(2)
    }
  }
})
