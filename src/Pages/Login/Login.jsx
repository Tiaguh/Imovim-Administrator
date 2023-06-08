import React from 'react'
import "./Login.css"

export default function Login() {
    return (
        <div className="form-container">
            <form>

                <div className="form-inputs">
                    <input placeholder="Email" />
                    <input placeholder="Senha" />
                    <p>Esqueci minha senha</p>
                </div>


                <button>Entrar</button>

            </form>
        </div >
    )
}