const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
const port = 3000

app.use(express.json())

var users = [
  {
    id: "1",
    email: "nvdinh123@gmail.com",
    avatar: "avatar/hinh1.jpg",
    fullName: "Nguyễn Văn Định",
  },
  {
    id: "2",
    email: "trisnguyen@gmail.com",
    avatar: "avatar/hinh2.jpg",
    fullName: "Nguyễn Hoàng Trí",
  },
  {
    id: "3",
    email: "snowpepermin@gmail.com",
    avatar: "avatar/hinh3.jpg",
    fullName: "Ưng Đình Wibu",
  },
]

app.use(express.static(__dirname + "/client"))

// app.post("/register", (req, res) => {
//   var user = req.body
//   var check = false

//   console.log(req.body)

//   for (const el of users) {
//     if (user.username === el.username) {
//       check = true
//     }
//   }

//   if (!check) {
//     users.push(user)
//     res.status(200).send({ status: "OK" })
//   } else {
//     res.status(500).send({ status: "NOK" })
//   }
// })

// app.post("/login", (req, res) => {
//   var user = req.body
//   var userLogin

//   for (const el of users) {
//     if (user.username === el.username && user.password === el.password) {
//       userLogin = el
//     }
//   }

//   if (userLogin) {
//     const token = jwt.sign({ username: user.username }, "secret_key", {
//       expiresIn: "600000", //10 phút
//     })
//     const { password, ...userWithoutPassword } = userLogin
//     var result = {
//       ...userWithoutPassword,
//       token,
//     }
//     res.status(200).send(result)
//   } else {
//     res.status(500).send({ status: "NOK" })
//   }
// })

// app.get("/users", (req, res) => {
//   const token = req.headers["authorization"].slice(7)
//   jwt.verify(token, "secret_key", (err, decoded) => {
//     if (err) {
//       console.log("Lỗi xác thực:", err.message)
//       res.status(500).json({ message: err.message })
//     } else {
//       // console.log('decoded: ', decoded);
//       res.send(users)
//     }
//   })
// })

app.get("/alluser", (req, res) => {
  res.send(users)
})

app.get("/user/:id", (req, res) => {
  const paramId = req.params["id"]
  console.log(paramId)
  const user = users.find((element) => {
    return element.id == paramId
  })
  console.log(user)
  res.send(user)
})

app.put("/update/:id", (req, res) => {
  const paramId = req.params["id"]
  formNewUser = req.body
  users.forEach((item) => {
    if (paramId == item.id) {
      item.email = formNewUser.email
      item.fullName = formNewUser.fullName
      item.avatar = formNewUser.avatar
    }
  })
  console.log(users)
  res.send(formNewUser)
})

app.post("/register", (req, res) => {
  formNewUser = req.body
  //   console.log(req)
  console.log(formNewUser)
  const newUser = {
    id: "3",
    email: formNewUser.email,
    fullName: formNewUser.fullname,
    avatar: formNewUser.avatar ? formNewUser.avatar : "",
  }
  users.push(newUser)
  console.log(newUser)
  res.send(newUser)
})

app.delete("/delete/:id", (req, res) => {
  const paramId = req.params["id"]

  const indexUser = users.findIndex((item) => {
    return item.id == paramId
  })
  users.splice(indexUser, 1)

  res.send(paramId)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
