import { useEffect, useState } from "react"
import './styled.css'

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
      {cats?.map((cat) => (

        <div key={cat.id} className="container">
          <img src={cat?.image?.url} alt="" />
          <h2>{cat.name}</h2>
          <p>{cat.description}</p>
          <a href={cat.wikipedia_url} target="_blank" >Saiba Mais</a>
        </div>
      ))}
    </>
  )
}