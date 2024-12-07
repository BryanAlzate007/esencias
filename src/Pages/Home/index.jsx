import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"

function Home() {
  const [ items, setItems]= useState(null)

useEffect(() => {
  fetch('https://api.escuelajs.co/api/v1/products')
  .then(response => response.json())
  .then(data => setItems(data))
}, [])

  return (
  <Layout>
    HOME
    <div className="grid gap-4 grid-cols-4 w full max-w-screen-lg">
    {
      items?.map(() => {
        return<Card />
      })
    } 
    </div>
    <ProductDetail />
 
  </Layout>
  )
}

export default Home