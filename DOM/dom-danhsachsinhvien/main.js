const students = [
  {
    id: "1",
    name: "Nguyen Van Teo",
    classId: "1",
  },
  {
    id: "2",
    name: "Nguyen Van Ti",
    classId: "2",
  },
  {
    id: "3",
    name: "Tran Van Tun",
    classId: "3",
  },
  {
    id: "4",
    name: "Nguyen Thi Heo",
    classId: "1",
  },
  {
    id: "5",
    name: "Le Thi Be",
    classId: "1",
  },
]

const classList = [
  {
    id: "1",
    name: "CNTT",
  },
  {
    id: "2",
    name: "DTVT",
  },
  {
    id: "3",
    name: "THXD",
  },
  {
    id: "4",
    name: "XDDD",
  },
]

var table = document.getElementById("tbl")
var classId = document.getElementById("class")

function init() {
  renderStudent(students)
  renderClass(classList)
}

const template = document.createElement("tr")
template.innerHTML = `
<td class="hoTen">Nguyen Van Teo</td>
<td class="class">CNTT</td>
<td>
    <button class="updateBtn">Sửa</button>
    <button class="delBtn">Xóa</button>
</td>
`

function renderStudent(students) {
  table.innerHTML = ""
  students.forEach(({ id, name, classId }) => {
    const tr = template.cloneNode(true)
    tr.querySelector(".hoTen").innerText = name
    const className = classList.find((item) => {
      return item.id == classId
    })
    tr.querySelector(".class").innerText = className.name
    tr.querySelector("td .updateBtn").setAttribute(
      "onclick",
      `updateItem(${id})`
    )
    tr.querySelector("td .delBtn").setAttribute("onclick", `deleteItem(${id})`)

    table.appendChild(tr)
  })
}

function renderClass(classList) {
  let newOption = document.createElement("option")
  newOption.value = ""
  newOption.innerHTML = "Hãy nhập"
  classId.appendChild(newOption)
  classList.forEach(({ id, name }) => {
    newOption = document.createElement("option")
    newOption.value = id
    newOption.innerHTML = name
    classId.appendChild(newOption)
  })
}

function updateItem(id) {
  resetValidate()

  const tenItem = document.getElementsByName("name")[0]

  const studentfind = students.find((item) => {
    return item.id == id
  })

  classId.value = studentfind.classId
  tenItem.value = studentfind.name

  const createBtn = document.getElementById("create")
  const updateBtn = document.getElementById("update")

  updateBtn.style.display = "block"
  createBtn.style.display = "none"

  updateBtn.setAttribute("onclick", `updateItemDetail(${id})`)
}

function deleteItem(id) {
  resetValidate()
  if (!validate()) return
  if (confirm("Bạn có muốn xóa không")) {
    const studentFindIndex = students.findIndex((item) => {
      return item.id == id
    })
    students.splice(studentFindIndex, 1)
    renderStudent(students)
  }
}

function updateItemDetail(id) {
  if (!validate()) return
  const studentName = document.getElementsByName("name")[0]

  //tim cach toi uu
  students.forEach((item) => {
    if (id == item.id) {
      item.name = studentName.value
      item.classId = classId.value
    }
  })

  const createBtn = document.getElementById("create")
  const updateBtn = document.getElementById("update")
  updateBtn.style.display = "none"
  createBtn.style.display = "block"

  studentName.value = ""
  classId.value = ""

  resetValidate()
  renderStudent(students)
}

function getNewId(students) {
  let max = students[0].id
  students.forEach((item) => {
    if (Number(item.id) > max) {
      max = Number(item.id)
    }
  })
  return max + 1
}

function addHandle() {
  const studentName = document.getElementsByName("name")[0]

  const student = {
    id: getNewId(students),
    name: studentName.value,
    classId: classId.value,
  }

  students.push(student)
}

document.getElementById("create").addEventListener("click", function (event) {
  event.preventDefault()
  resetValidate()
  if (!validate()) return
  addHandle()
  classId.value = ""
  const studentName = document.getElementsByName("name")[0]
  studentName.value = ""

  renderStudent(students)
})

function resetValidate() {
  const errorTen = document.getElementsByClassName("form-message")[0]
  const errorClass = document.getElementsByClassName("form-message")[1]
  errorTen.innerText = ""
  errorClass.innerText = ""
}

function validate() {
  const errorTen = document.getElementsByClassName("form-message")[0]
  const errorClass = document.getElementsByClassName("form-message")[1]

  const studentName = document.getElementsByName("name")[0]
  let result = true
  if (!studentName.value) {
    errorTen.innerText = "Vui lòng nhập tên"
    result = false
  }
  if (!classId.value) {
    errorClass.innerText = "Vui lòng chọn lớp"
    result = false
  }
  return result
}

init()
