import React, { useState } from 'react'
import FormularioAcesso from '../component/formularioAcesso/FormularioAcesso'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';


const Signin = () => {
  // objeto user
  const user = {
    email: '',
    senha: ''
  }
  // useState para login
  const [userLogin, setUserLogin] = useState(user);

  //Função teste
  const submitLogin = (e) => {
    e.preventDefault()
    console.log(userLogin);
  }

  //Consultar api para cadastrar

  

return (

  <FormularioAcesso>
    <div className='container-form'>

      <div className="content-form">
        <h2>Bem vindo de volta ao Animes</h2>
        <form>
          <div>
            <label>
              Email
              <input type="email" name='email' className='email'
                onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })}
                value={userLogin.email}
              />
            </label>
            <br />
            <br />
            <label>
              Senha
              <input type="password" name='password' className='password'
                onChange={(e) => setUserLogin({ ...userLogin, senha: e.target.value })}
                value={userLogin.senha}
              />
            </label>
          </div>
  
          <div className='btns'>
            <button>
              <span className='btn-icon'><FcGoogle /></span>
              <span className='btn-text'>Inscrever-se com Google</span>
            </button>
            <button>Login</button>
          </div>

          <span className='fazerLogin'>
            não tem uma conta?
            <Link to={'/signup'}> Sign Up</Link>
          </span>
        </form>

      </div>

    </div>
  </FormularioAcesso>
)
}

export default Signin