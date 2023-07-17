let form = document.getElementById("form")

const errorInit = document.getElementById("error")
errorInit.setAttribute(
  "style",
  "color: red;text-align: center;font-size: larger;font-weight: bold;"
)

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const chuoigoc = document.getElementById("chuoigoc")
  const doanthaythe = document.getElementById("doanthaythe")
  const tugoc = document.getElementById("tugoc")
  const tuthaythe = document.getElementById("tuthaythe")
  const error = document.getElementById("error")

  //init
  error.innerText = ""
  doanthaythe.innerText = ""

  if (chuoigoc.value && tugoc.value && tuthaythe.value) {
    doanthaythe.innerText = chuoigoc.value.replace(tugoc.value, tuthaythe.value)
  } else {
    error.innerText = "Vui lòng điền đầy đủ thông tin vào!"
  }
})
