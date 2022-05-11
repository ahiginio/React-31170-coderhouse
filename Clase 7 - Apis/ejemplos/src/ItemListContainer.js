import React from "react"
import axios from "axios"
export default function ItemListContainer () {
  const [item, setItem] = React.useState([])

  const getItem = new Promise((resolve, reject) => {
    resolve()
  }).then(() => {
    console.log("getItem")
  })

  const getItem2 = () => {
    axios.get().then((res) => {
      setItem(res.data.results[3])
    })
  } 


}
   