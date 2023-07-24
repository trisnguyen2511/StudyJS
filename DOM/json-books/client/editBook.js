const booksApi = "http://localhost:3001/books"

const editBtnElement = $("#submit")
const titleElemtent = $('input[name="title"]')
const descriptionElemtent = $('textarea[name="description"]')
const detailElemtent = $('textarea[name="detail"]')
const statusElemtent = $('input[name="status"]')

const queryString = window.location.search
const parameters = new URLSearchParams(queryString)
const idParam = parameters.get("id")

async function init() {
  var { data } = await axios.get(booksApi)

  const student = data.find((item) => {
    return item.id == idParam
  })
  titleElemtent.val(student.title)
  descriptionElemtent.val(student.description)
  detailElemtent.val(student.detail)
  statusElemtent.val(student.status)

  editBtnElement.on("click", function (e) {
    e.preventDefault()
    editHandle()
  })
}

async function editHandle() {
  const newBook = {
    id: idParam,
    title: titleElemtent.val(),
    description: descriptionElemtent.val(),
    detail: detailElemtent.val(),
    status: statusElemtent.val(),
  }

  var result = await axios({
    method: "PUT",
    url: booksApi + "/" + idParam,
    data: newBook,
    headers: { "Content-Type": "application/json" },
  })

  if (result.data) {
    location.replace("http://127.0.0.1:5500/DOM/json-books/client/list.html")
  }
}

init()
