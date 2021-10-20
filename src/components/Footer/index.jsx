import "./styled.css"

export function Footer() {
    const date = new Date()
    const ano = date.getFullYear();

    return (
        <footer className="footer">
            <div className="footer_content" >
                <form action="submit">
                    <h2>Entre em contato para saber mais</h2>
                    <input type="text" placeholder="Nome Completo" />
                    <input type="email" placeholder="E-mail" />
                    <textarea name="contato" placeholder="Mensagem" ></textarea>

                    <button type="submit">Enviar</button>
                </form>
            </div>

            <div className="info">
                
                <p>Todos os direitos reservados | Copyright &copy; {ano}</p>
            </div>
        </footer>
    )
}