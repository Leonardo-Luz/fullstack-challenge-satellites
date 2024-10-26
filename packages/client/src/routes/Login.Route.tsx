
export const Login = () => {
    return (
        <div className="login-body">
            <div className="login-container">
                <label className="login-input-container">
                    Login:
                    <input type="text"/>
                </label>
                <label className="login-input-container">
                    Senha:
                    <input type="password"/>
                </label>
                <input type="button" value={"Cadastrar"} />
            </div>
        </div>
    )
}