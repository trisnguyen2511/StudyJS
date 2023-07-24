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

function addElementStudent(book) {
  return `
  <tr class="table-data">
    <td style="text-align: center">${book.id}</td>
    <td>${book.title}</td>
    <td>${book.description}</td>
    <td>${book.detail}</td>
    <td style="text-align: center">${book.status ? "YES" : "NO"}</td>
    <td>
    <a href="edit.html?id=${book.id}">Sửa</a>
    <a href="" onclick="return confirm('Bạn có chắc chắn muốn xóa không?')">Xóa</a>
    </td>
  </tr>
            `
}

function getHeader() {
  return `
  <tr>
  <th>id</th>
  <th>title</th>
  <th>description</th>
  <th>detail</th>
  <th>status</th>
  <th>function</th>
  </tr>`
}

function renderList() {
  let html = getHeader
  books.forEach((element) => {
    html += addElementStudent(element)
  })
  tableElement.html(html)
}

var tableElement = $("#table")

async function init() {
  var { data } = await axios.get(booksApi)
  books = data

  renderList()
}

init()
