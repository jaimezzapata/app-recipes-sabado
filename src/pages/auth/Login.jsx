import Header from "../../components/Header"
import './Login.css'
import { useState } from "react"
import { users } from "../../data/dataUsers"

const Login = () => {

    const [getUser, setUser] = useState('Jaime Zapata')
    const [getPassword, setPassword] = useState('')

    console.log(users)

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
                    <input value={getUser} onChange={(e)=> setUser(e.target.value) } type="text" />
                </section>
                <section>
                    <label htmlFor="">Contraseña</label>
                    <input value={getPassword} onChange={(e)=> setPassword(e.target.value) } type="password" />
                </section>
                <button onClick={login} type="button">Iniciar Sesión</button>
            </form>
        </section>

    )
}
export default Login