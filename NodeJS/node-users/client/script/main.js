const alluserAPI = "http://localhost:3000/alluser"
const deleteAPI = "http://localhost:3000/delete"

var users = [
  //   {
  //     id: "1",
  //     email: "nvdinh123@gmail.com	",
  //     avatar: "avatar/hinh1.jpg",
  //     fullName: "Nguyễn Văn Định",
  //   },
]

const table = document.getElementsByClassName("index-user")[0]

function getRenderUser(user) {
  return `					
      <tr align="center">
          <td>${user.id}</td>
          <td>${user.email}</td>
          <td><img src="${user.avatar}" alt="" width="100px" height="100px" /></td>
          <td>${user.fullName}</td>
          <td>
              <button onclick="updateBtn('${user.id}')" >Sửa</button>
              <button onclick="
                deleteBtn('${user.id}')
              " >Xóa</button>
          </td>
      </tr>`
}

async function renderUsers() {
  var { data } = await axios.get(alluserAPI)
  users = data

  table.innerHTML = ""

  let userHTML = users
    .map((element) => {
      return getRenderUser(element)
    })
    .join("")
  table.innerHTML = userHTML
}

function updateBtn(id) {
  location.href = `capnhat.html?id=${id}`
}

function deleteBtn(id) {
  if (confirm("Bạn có muốn xóa không")) {
    handleDel(id)
  }
}

async function handleDel(id) {
  await axios({
    method: "DELETE",
    url: deleteAPI + "/" + id,
    headers: { "Content-Type": "application/json" },
  })
  renderUsers()
}

renderUsers()
