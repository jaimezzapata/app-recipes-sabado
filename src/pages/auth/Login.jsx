import Header from "../../components/Header"
import { users } from "../../data/dataUsers"

import './Login.css'
const Login = () => {

    console.log(usuarios[0])
    function login() {
        if (users[0].user == 'Jaime' && users[0].password == '12345') {
            alert('Inicio de sesión')
        }
    }

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
                <button onClick={login} type="button">Iniciar Sesión</button>
            </form>
        </section>

    )
}
export default Login