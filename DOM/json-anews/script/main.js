const newsAPI = "http://localhost:3001/anews"
const categoryAPI = "http://localhost:3001/categories"

var newsElement = $(".main-content").find("ul")
var categoryElement = $(".content-left").find("ul")
var news = []
var categoryies = []
var detailNewsElement = $(".main-content")
var titelElement = $(".content-right").find("h3")

function addElementNews(_new) {
  return `						
    <li>
    <h2>
        <a href="chitiet.html?newsId=${_new.id}" title="">${_new.description}</a>
    </h2>
    <div class="item">
        <p>${_new.detail}</p>
        <div class="clr"></div>
    </div>
  </li>
  `
}

function addElementCategory(category) {
  return `<li><a href="danhmuc.html?cateID=${category.id}">${category.name}</a></li>`
}

async function init() {
  var { data } = await axios.get(newsAPI)
  news = data
  var { data } = await axios.get(categoryAPI)
  categoryies = data

  var html = ""
  news.forEach((element) => {
    html += addElementNews(element)
  })
  newsElement.html(html)

  var html = ""
  categoryies.forEach((element) => {
    html += addElementCategory(element)
  })
  categoryElement.html(html)
}

async function initCategory() {
  var { data } = await axios.get(categoryAPI)
  categoryies = data

  var html = ""
  categoryies.forEach((element) => {
    html += addElementCategory(element)
  })
  categoryElement.html(html)
}

async function initNews() {
  var { data } = await axios.get(newsAPI)
  news = data

  var html = ""
  news.forEach((element) => {
    html += addElementCategory(element)
  })
  newsElement.html(html)
}

async function initNewsWithCateId(id) {
  var { data } = await axios.get(newsAPI + `?catId=${id}`)
  news = data

  var cates = await axios.get(categoryAPI + `?id=${id}`)

  var html = ""
  if (!cateId) {
    cateId = categoryies[0].id
  }
  news.forEach((element) => {
    html += addElementNews(element)
  })
  newsElement.html(html)
  titelElement.text(`Tin tức :: ` + cates.data[0].name)
}

async function initDetailNews(id) {
  var { data } = await axios.get(newsAPI + `?id=${id}`)

  titelElement.text(data[0].description)

  detailNewsElement.html(`<p>${data[0].detail}</p>`)
}
