const queryString = window.location.search
const parameters = new URLSearchParams(queryString)
var newsId = parameters.get("newsId")

initCategory()
initDetailNews(newsId)
