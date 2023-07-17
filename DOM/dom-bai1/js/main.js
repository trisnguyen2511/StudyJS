const listNews = [
  {
    id: 1,
    img: "images/h1.jpg",
    title: "Cách phối đồ đi hẹn hò 8/3 đẹp như Quỳnh Anh Shyn",
    content:
      "8/3 sắp đến rồi, những gợi ý mặc đẹp dưới đây sẽ giúp bạn chọn được bộ đồ ưng ý. Cùng học Quỳnh Anh Shyn một vài cách phối đồ cực hay ho để bạn đi hẹn hò 8/3 nhé!",
  },
  {
    id: 2,
    img: "images/h2.jpg",
    title: "Diện đồ đôi cho teen đi hẹn hò ngày 8/3",
    content:
      "Những cặp đôi yêu nhau đã có ý tưởng nên mặc gì trong ngày 8/3 chưa? Những bộ đồ đôi vừa đẹp vừa thoải mái chắc chắn sẽ là gợi ý ăn mặc cho các bạn trẻ. Dưới đây là những bộ đồ đôi đẹp để teen tham ...",
  },
  {
    id: 3,
    img: "images/h3.jpg",
    title: "Hướng dẫn chọn trang phục cho teengirl ngày 8/3",
    content:
      "Các teen girl nhà mình hẳn đang rất hào hứng chọn những bộ đồ thật đẹp để đi chơi 8/3. Những gợi ý ăn mặc dưới đây sẽ giúp các nàng có những set đồ thật đẹp để diện trong ngày 8.3 nhé!",
  },
]

var header = document.getElementById("heading")
header.innerText = "Trang tin VinaEnter Edu"
var list = document.getElementById("list")
// list.nodeName = "ul"

// listNews.forEach(({ id, img, title, content }) => {
//     const li = document.createElement("li")
//     const aNode = document.createElement("a")
//     const imgNode = document.createElement("img")
//     imgNode.src = img
//     imgNode.alt = img
//     aNode.appendChild(imgNode)
//     const khoiPhaiNode = document.createElement("div")
//     khoiPhaiNode.classList.add("khoiphai")
//     const h2Node = document.createElement("h2")
//     const aKhoiPhaiNode = document.createElement("a")
//     aKhoiPhaiNode.href = "#"
//     aKhoiPhaiNode.innerText = title
//     h2Node.appendChild(aKhoiPhaiNode)
//     const pNode = document.createElement("p")
//     pNode.innerText = content
//     khoiPhaiNode.appendChild(h2Node, pNode)
//     khoiPhaiNode.appendChild(pNode)
//     const clsNode = document.createElement("div")
//     clsNode.classList.add("clr")
//     li.appendChild(aNode)
//     li.appendChild(khoiPhaiNode)
//     li.appendChild(clsNode)
//     list.appendChild(li)

// })

const template = document.createElement("li")
template.innerHTML = `
<a>
  <img src="" alt="">
</a>
<div class="khoiphai">
  <h2>
    <a href="#"></a>
  </h2>
  <p></p>
</div>
<div class="clr"></div>
`

listNews.forEach(({ id, img, title, content }) => {
  const li = template.cloneNode(true)
  li.querySelector("img").src = img
  li.querySelector("img").alt = img
  li.querySelector(".khoiphai h2 a").innerText = title
  li.querySelector(".khoiphai p").innerText = content
  list.appendChild(li)
})
