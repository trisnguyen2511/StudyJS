const queryString = window.location.search
const parameters = new URLSearchParams(queryString)
var cateId = parameters.get("cateID")

initCategory()
initNewsWithCateId(cateId)
