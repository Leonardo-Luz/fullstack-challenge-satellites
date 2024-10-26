import { Link } from "react-router-dom"

export const Error = () => {
    return (
        <div>
            Page not found!
            <Link to={'/'}>Voltar</Link>
        </div>
    )
}