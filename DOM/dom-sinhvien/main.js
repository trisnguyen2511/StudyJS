const students = [
  {
    id: "1",
    name: "Dinh",
    address: "hue",
  },
  {
    id: "2",
    name: "Nam",
    address: "quang nam",
  },
  {
    id: "3",
    name: "Tan",
    address: "da nang",
  },
  {
    id: "4",
    name: "Hung",
    address: "hue",
  },
  {
    id: "5",
    name: "Tri",
    address: "quang tri",
  },
  {
    id: "6",
    name: "Anh",
    address: "hue",
  },
  {
    id: "7",
    name: "Binh",
    address: "da nang",
  },
]

const errorInit1 = document.getElementsByClassName("form-message")[0]
const errorInit2 = document.getElementsByClassName("form-message")[1]
errorInit1.setAttribute("style", "color: red")
errorInit2.setAttribute("style", "color: red")

const template = document.createElement("li")
template.innerHTML = `
<tr>
<th class></th>
<th></th>
<td>
    <button></button>
    <button></button>
</td>
</tr>
`

function getNewId() {
  let max = students[0].id
  students.forEach((item, index) => {
    if (Number(item.id) > max) {
      max = Number(item.id)
    }
  })
  return max + 1
}

function validate() {
  const tenItem = document.getElementsByName("name")[0]
  const addressItem = document.getElementsByName("address")[0]

  const errorTen = document.getElementsByClassName("form-message")[0]
  const errorAddress = document.getElementsByClassName("form-message")[1]
  errorTen.innerText = ""
  errorAddress.innerText = ""

  let errflag = false
  if (!tenItem.value) {
    errorTen.innerText = "Vui lòng nhập tên"
    errflag = true
  }
  if (!addressItem.value) {
    errorAddress.innerText = "Vui lòng nhập địa chỉ"
    errflag = true
  }
  if (errflag) return false
  else return true
}

function addItem() {
  if (!validate()) {
    return
  }
  const tenItem = document.getElementsByName("name")[0]
  const addressItem = document.getElementsByName("address")[0]

  const addId = getNewId()
  const student = {
    id: addId,
    name: tenItem.value,
    address: addressItem.value,
  }

  //performance
  const listStudentItem = document.getElementById("list-students")

  const li = template.cloneNode(true)
  li.querySelector("h2").innerText = tenItem.value
  li.querySelector("div").innerText = "Address: " + addressItem.value
  li.querySelector(".updateItem").setAttribute(
    "onclick",
    `updateItem(${addId})`
  )
  li.querySelector(".updateItem").setAttribute(
    "onclick",
    `deleteItem(${addId})`
  )
  listStudentItem.appendChild(li)

  students.push(student)
  //   showItem()
}

function updateItem(id) {
  const errorTen = document.getElementsByClassName("form-message")[0]
  const errorAddress = document.getElementsByClassName("form-message")[1]
  errorTen.innerText = ""
  errorAddress.innerText = ""

  const tenItem = document.getElementsByName("name")[0]
  const addressItem = document.getElementsByName("address")[0]

  const studentfind = students.find((item) => {
    return item.id == id
  })

  tenItem.value = studentfind.name
  addressItem.value = studentfind.address

  const createBtn = document.getElementById("create")
  const updateBtn = document.getElementById("update")

  updateBtn.style.display = "block"
  createBtn.style.display = "none"

  updateBtn.setAttribute("onclick", `updateItemDetail(${id})`)
}

function updateItemDetail(id) {
  if (!validate()) {
    return
  }
  const tenItem = document.getElementsByName("name")[0]
  const addressItem = document.getElementsByName("address")[0]

  //tim cach toi uu
  students.forEach((item) => {
    if (id == item.id) {
      item.name = tenItem.value
      item.address = addressItem.value
    }
  })

  const createBtn = document.getElementById("create")
  const updateBtn = document.getElementById("update")
  updateBtn.style.display = "none"
  createBtn.style.display = "block"

  tenItem.value = ""
  addressItem.value = ""

  showItem()
}

function deleteItem(id) {
  if (confirm("Bạn có muốn xóa không")) {
    const errorTen = document.getElementsByClassName("form-message")[0]
    const errorAddress = document.getElementsByClassName("form-message")[1]
    errorTen.innerText = ""
    errorAddress.innerText = ""

    const createBtn = document.getElementById("create")
    const updateBtn = document.getElementById("update")
    updateBtn.style.display = "none"
    createBtn.style.display = "block"

    const tenItem = document.getElementsByName("name")[0]
    const addressItem = document.getElementsByName("address")[0]
    tenItem.value = ""
    addressItem.value = ""

    const indexStudent = students.findIndex((item) => {
      return item.id == id
    })
    students.splice(indexStudent, 1)

    showItem()
  }
}

function showItem() {
  const listStudentItem = document.getElementById("list-students")
  listStudentItem.innerHTML = ""
  students.forEach((item, index) => {
    const li = template.cloneNode(true)
    li.querySelector("h2").innerText = item.name
    li.querySelector("div").innerText = "Address: " + item.address
    li.querySelector(".updateItem").setAttribute(
      "onclick",
      `updateItem(${item.id})`
    )
    li.querySelector(".deleteItem").setAttribute(
      "onclick",
      `deleteItem(${item.id})`
    )
    listStudentItem.appendChild(li)
  })
}

showItem()
