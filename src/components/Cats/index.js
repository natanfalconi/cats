import { useEffect, useState } from "react"

export function Cats() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then(response => response.json())
      .then(data => setCats(data))
  }, [])

  console.log(cats)

  return (
    
    <>
      {cats?.map((cat) => (
        <div >
          <p>{cat.name}</p>
          {/* <a href={pokemon.url}>Baixar</a> */}
        </div>
      ))}
    </>
  )
}