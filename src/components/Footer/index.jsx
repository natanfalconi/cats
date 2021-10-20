import "./styled.css"

export function Footer() {
    const date = new Date()
    const ano = date.getFullYear();

    return (
        <footer className="footer">
            <div className="info">
                <p>Todos os direitos reservados | Copyright &copy; {ano}</p>
            </div>
        </footer>
    )
}