if (localStorage.getItem("currentUser")) {
  location = "index.html"
} else {
  var form = document.forms["register-form"]

  form.addEventListener("submit", async function (e) {
    e.preventDefault()

    const formValue = {}
    for (const el of e.target) {
      if (el.name) {
        formValue[el.name] = el.value
      }
    }

    console.log(formValue)
    try {
      await axios({
        method: "POST",
        url: "http://localhost:3000/register",
        data: formValue,
        headers: { "Content-Type": "application/json" },
      })

      location = "index.html?msg=1"
    } catch (error) {
      var errorElement = document.querySelector(".error")
      errorElement.innerHTML =
        '<p style="color: red; background: yellow">Xảy ra lỗi!</p>'
    }
  })
}
