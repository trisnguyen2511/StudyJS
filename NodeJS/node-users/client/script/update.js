const queryString = window.location.search
const parameters = new URLSearchParams(queryString)
const idParam = parameters.get("id")
const getuserAPI = "http://localhost:3000/user/" + idParam
const updateAPI = "http://localhost:3000/update/" + idParam

const updateBtnElement = document.getElementById("updatebtn")
const nameElement = document.getElementsByName("username")[0]
const fullnameElement = document.getElementsByName("fullname")[0]
const avatarElement = document.getElementsByName("avatar")[0]

async function init() {
  var { data } = await axios.get(getuserAPI)

  nameElement.value = data.email
  fullnameElement.value = data.fullName
  //   avatarElement.value = data.avatar
}

function handleUpdate() {
  _update()
}

async function _update() {
  const newUser = {
    email: nameElement.value,
    fullName: fullnameElement.value,
    avatar: avatarElement.value ? avatarElement.value : "",
  }

  var result = await axios({
    method: "PUT",
    url: updateAPI,
    data: newUser,
    headers: { "Content-Type": "application/json" },
  })

  if (result) {
    location.href = `index.html`
  }
}

init()
