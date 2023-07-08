let myArray = [
  {
    id: 1,
    name: "Tris",
    age: 20,
    address: "Dong Nai",
  },
  {
    id: 2,
    name: "Dinh",
    age: 20,
    address: "Da Nang",
  },
  {
    id: 3,
    name: "Chuong",
    age: 20,
    address: "Gia Lai",
  },
]

for (let data of myArray) {
  for (let detail in data) {
    console.log(`${detail}: ${data[detail]}`)
  }
  console.log("============")
}
