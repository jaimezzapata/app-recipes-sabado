import Header from "../../components/Header"

const Login = () => {
    return (
        <section>
            <Header />
            <form>
                <section>
                    <label htmlFor="">Usuario</label>
                    <input type="text" />
                </section>
                <section>
                    <label htmlFor="">Contraseña</label>
                    <input type="password" />
                </section>
                <button type="button">Iniciar Sesión</button>
            </form>
        </section>

    )
}

export default Login