const studentsApi = "http://localhost:3001/students"
const classApi = "http://localhost:3001/classList"

var students = [
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

var classList = [
  // {
  //   id: "1",
  //   name: "CNTT",
  // },
  // {
  //   id: "2",
  //   name: "DTVT",
  // },
  // {
  //   id: "3",
  //   name: "THXD",
  // },
  // {
  //   id: "4",
  //   name: "XDDD",
  // },
]

var classElement = $("#class")
var tableElement = $("#tbl")
var studentName = $('input[name="name"]')
var addBtnElement = $("#create")
var updBtnElement = $("#update")

async function init() {
  addBtnElement.on("click", function (e) {
    e.preventDefault()
    resetValidate()
    if (!validate()) return
    addHandle()
    classElement.val("")
    studentName.val("")
  })
  var { data } = await axios.get(classApi)
  classList = data
  var student = await axios.get(studentsApi)
  students = student.data
  renderClass(classList)
  renderStudent()
}

/**
 * Render ra từng sinh viên
 * @param {*} student
 * @returns
 */
function addElementStudent(student, classList) {
  const className = classList.find((item) => {
    return item.id == student.classId
  })
  return `<tr>
            <td class="hoTen">${student.name}</td>
            <td class="class">${className.name}</td>
            <td>
                <button class="updateBtn" onclick="updateItem('${student.id}')">Sửa</button>
                <button class="delBtn" onclick="deleteItem('${student.id}')">Xóa</button>
            </td>
          </tr>
            `
}

function renderStudent() {
  tableElement.html("")
  let html = ""
  students.forEach((student) => {
    html += addElementStudent(student, classList)
  })
  tableElement.html(html)
}

const addElementClass = (id, name) => {
  return `<option value="${id}">${name}</option>`
}

function renderClass(classList) {
  let html = addElementClass("", "Hãy nhập")

  classList.forEach(({ id, name }) => {
    html += addElementClass(id, name)
  })
  classElement.html(html)
}

function updateItem(id) {
  resetValidate()

  const studentfind = students.find((item) => {
    return item.id == id
  })

  studentName.val(studentfind.name)
  classElement.val(studentfind.classId)

  updBtnElement.css("display", "block")
  addBtnElement.css("display", "none")
  updBtnElement.attr("onclick", `updateItemDetail(${id})`)
}

async function deleteItem(id) {
  resetValidate()
  // if (!validate()) return
  if (confirm("Bạn có muốn xóa không")) {
    const studentFindIndex = students.findIndex((item) => {
      return item.id == id
    })

    await axios({
      method: "DELETE",
      url: studentsApi + "/" + id,
      headers: { "Content-Type": "application/json" },
    })

    students.splice(studentFindIndex, 1)
    renderStudent()
  }
}

async function updateItemDetail(id) {
  if (!validate()) return

  const student = students.find((item) => {
    return (item.id = id)
  })
  const newStudent = {
    ...student,
    name: studentName.val(),
    classId: classElement.val(),
  }

  var result = await axios({
    method: "PUT",
    url: studentsApi + "/" + id,
    data: newStudent,
    headers: { "Content-Type": "application/json" },
  })

  students.forEach((item) => {
    if (id == item.id) {
      item.name = studentName.val()
      item.classId = classElement.val()
    }
  })

  updBtnElement.css("display", "none")
  addBtnElement.css("display", "block")

  studentName.val("")
  classElement.val("")

  resetValidate()
  renderStudent()
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

async function addHandle() {
  const student = {
    id: getNewId(students) + "",
    name: studentName.val(),
    classId: classElement.val(),
  }

  var result = await axios({
    method: "POST",
    url: studentsApi,
    data: student,
    headers: { "Content-Type": "application/json" },
  })

  students.push(result.data)

  const studentE = addElementStudent(result.data, classList)
  tableElement.append(studentE)

  // renderStudent()
}

function resetValidate() {
  studentName.parent().children()[3].innerText = ""
  classElement.parent().children()[3].innerText = ""
}

function validate() {
  let result = true
  if (!studentName.val()) {
    studentName.parent().children()[3].innerText = "Vui lòng nhập tên"

    result = false
  }
  if (!classElement.val()) {
    classElement.parent().children()[3].innerText = "Vui lòng chọn lớp"
    result = false
  }
  return result
}

function handleBlurInput(input) {
  var errorElement = input.parent().children()[3]
  input.blur(function () {
    if (input.val() === "") {
      if (input.attr("name") == "name")
        $(errorElement).text("Yêu cầu nhập tên!")
      if (input.attr("name") == "class")
        $(errorElement).text("Yêu cầu chọn lớp!")
    } else {
      $(errorElement).attr("style", "display: none;")
    }
  })
}

handleBlurInput(studentName)
handleBlurInput(classElement)

init()
