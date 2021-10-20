export function CatsList({ cat }) {
  return (
    <li key={cat.id} >
      <div className="content-list">
        <img src={cat?.image?.url} alt="" />
        <h2>{cat.name}</h2>
        <p>{cat.description.substr(0, 80) }...</p>
        <a href={cat.wikipedia_url} target="_blank" >Saiba Mais</a>
      </div>
    </li>
  )
}
