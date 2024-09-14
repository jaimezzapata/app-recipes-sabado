import Header from "../../components/Header"
import './Login.css'
const Login = () => {
    return (
        <section className="sectionLogin">
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