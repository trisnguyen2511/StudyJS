const booksApi = "http://localhost:3001/books"

var books = [
  {
    id: 1,
    title: "truyện dài",
    description: "mô tả về truyện dài",
    detail: "chi tiết về truyện dài",
    status: true,
  },
  {
    id: 2,
    title: "sách thiếu nhi",
    description: "mô tả về sách thiếu nhi",
    detail: "chi tiết về sách thiếu nhi",
    status: false,
  },
  {
    id: 3,
    title: "sách giáo khoa",
    description: "mô tả về sách giáo khoa",
    detail: "chi tiết về sách giáo khoa",
    status: true,
  },
]

const addBtnElement = $("#submit")
const titleElemtent = $('input[name="title"]')
const descriptionElemtent = $('textarea[name="description"]')
const detailElemtent = $('textarea[name="detail"]')
const statusElemtent = $('input[name="status"]')

async function addHandle() {
  const book = {
    id: getNewId(),
    title: titleElemtent.val(),
    description: descriptionElemtent.val(),
    detail: detailElemtent.val(),
    status: statusElemtent.val(),
  }

  var result = await axios({
    method: "POST",
    url: booksApi,
    data: book,
    headers: { "Content-Type": "application/json" },
  })

  if (result) {
    console.log("succ")
  }
}

async function init() {
  var { data } = await axios.get(booksApi)
  books = data

  addBtnElement.on("click", function (e) {
    e.preventDefault()
    addHandle()
  })
}
init()

function getNewId() {
  let max = books[0].id
  books.forEach((item) => {
    if (Number(item.id) > max) {
      max = Number(item.id)
    }
  })
  return max + 1
}
