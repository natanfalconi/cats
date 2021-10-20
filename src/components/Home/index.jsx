import { Link } from 'react-router-dom'
import { Footer } from '../Footer'
import './styled.css'

export function Home() {
  return (
    <>
      <main className="content_Home">
        <div className="text">
          <h2>Apenda sobre seus amigos!</h2>
          <p>O gato é um dos animais domésticos mais procurados para companhia. Independentes, esses animais carregam fortes heranças de seus ancestrais felinos, como o instinto da caça, muito reproduzido em suas brincadeiras. Esse animal adorável, no entanto, precisa de cuidados para viver mais e com bem-estar.</p>
          <Link to="/cats">Saiba Mais</Link>
        </div>

        <div className="img">
          <img src="https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="gato" srcset="" />
        </div>
      </main>

      <Footer />
    </>
  )
}