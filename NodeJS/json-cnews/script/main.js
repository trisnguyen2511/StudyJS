const newsAPI = "http://localhost:3001/cnews"
const categoryAPI = "http://localhost:3001/categories"

// var newsElement = $(".main-content").find("ul")
// var categoryElement = $(".content-left").find("ul")
// var news = []
// var categoryies = []
// var detailNewsElement = $(".main-content")
// var titelElement = $(".content-right").find("h3")

var newsElement = $(".left")
var categoryElement = $(".right").find("ul")
var news = []
var categoryies = []
var detailNewsElement = $(".left").find("div")
var titelElement = $(".left").find("h1")

function addElementNews(_new) {
  return `						
  <div class="item">
    <h2><a href="detail.html?newsId=${_new.id}" title="">${_new.description}</a></h2>
    <img src="${_new.src}" alt="" width="585" height="156" />
    <div class="clr"></div>
    <p>${_new.detail}</p>
  </div>
  `
}

function addElementCategory(category) {
  return `<li><a href="cat.html?cateID=${category.id}">${category.name}</a></li>`
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

  detailNewsElement.html(`<p>${data[0].detail}</p><p>Trang web giúp người bán hàng có thể quản lý các loài hoa một cách dễ dàng.
  Qua website có thể tiếp cận khách hàng và cho phép họ đặt hàng trực tuyến trên web.</p>`)
}
