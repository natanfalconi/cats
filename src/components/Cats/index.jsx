import { useEffect, useState } from "react"
import { CatsList } from "../CatsList"
import './styled.css'
import { Footer } from './../Footer/index';

export function Cats() {
  const [cats, setCats] = useState([])

  // const api_key = 'api_key=3e3fbcd7651db653b38f5e5f76b5e36c'
  // const base_url = "https://api.themoviedb.org/3"

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then(response => response.json())
      .then(data => setCats(data))
  }, [])

  return (
    <>
      <section className="cats_container">
        <ul className="cats_container-list" >
          {cats?.map((cat) => (
            <CatsList cat={cat} />
          ))}
        </ul>
      </section>

      
      <Footer />
    </>
  )
}