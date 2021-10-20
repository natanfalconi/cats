import './styled.css'

export function Form() {
  return (

    <div className="form-content" >
      <form >
        <h2>Entre em contato para saber mais</h2>
        <input type="text" placeholder="Nome Completo" />
        <input type="email" placeholder="E-mail" />
        <textarea name="contato" placeholder="Mensagem" ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>

  )
}