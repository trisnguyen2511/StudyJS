const registerAPI = "http://localhost:3000/register"

const form = document.getElementById("register-form")

document.addEventListener("submit", (e) => {
  e.preventDefault()

  handelRegister()
})

async function handelRegister() {
  const email = document.getElementsByName("email")[0].value
  const password = document.getElementsByName("password")[0].value
  const avatar = document.getElementsByClassName("input-file")[0].value
  const fullname = document.getElementsByName("fullname")[0].value

  //   const queryString = window.location.search
  //   const parameters = new URLSearchParams(queryString)
  //   const email = parameters.get("email")
  //   const password = parameters.get("password")
  //   const fullname = parameters.get("fullname")

  const user = {
    email,
    password,
    avatar,
    fullname,
  }

  var result = await axios({
    method: "POST",
    url: registerAPI,
    data: user,
    headers: { "Content-Type": "application/json" },
  })

  if (result) {
    location.href = `index.html`
  }
}
