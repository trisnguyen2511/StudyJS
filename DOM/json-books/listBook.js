const books = [
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

const template = document.createElement("tr")
template.innerHTML = `
<td style="text-align: center"></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center"></td>
<td>
    <a href="edit.html">Sửa</a>
    <a href="" onclick="return confirm('Bạn có chắc chắn muốn xóa không?')">Xóa</a>
</td>
`

function renderList(books) {}

function init() {
  renderList(books)
}
