
export const Register = () => {
    return (
        <div className="register-body">
            <div className="register-container">
                <label className="register-input-container">
                    Login:
                    <input type="text"/>
                </label>
                <label className="register-input-container">
                    Senha:
                    <input type="password"/>
                </label>
                <label className="register-input-container">
                    Confirmar Senha:
                    <input type="password"/>
                </label>
                <input type="button" value={"Cadastrar"} />
            </div>
        </div>
    )
}