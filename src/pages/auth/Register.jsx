import Header from "../../components/Header"
import './Register.css'
import { useState } from "react"
let urlUsuarios = 'http://localhost:5273/usuarios'

const Register = () => {

    const [getUsuario, setUsuario] = useState('')
    const [getPassword, setPassword] = useState('')
    const [getEmail, setEmail] = useState('')

    const createUser = () => {
        
    }

    return (
        <section>
            <Header />
            <form>
                <section>
                    <label htmlFor="">Usuario</label>
                    <input onChange={(e) => { setUsuario(e.target.value) }} type="text" />
                </section>
                <section>
                    <label htmlFor="">Contraseña</label>
                    <input onChange={(e) => { setPassword(e.target.value) }} type="password" />
                </section>
                <section>
                    <label htmlFor="">Correo</label>
                    <input onChange={(e) => { setEmail(e.target.value) }} type="email" />
                </section>
                <button type="button">Registrar</button>
            </form>
        </section>
    )
}

export default Register