import React, { useCallback, useEffect, useState } from 'react'
import FormularioAcesso from '../component/formularioAcesso/FormularioAcesso'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';

const Signup = () => {

  //Objeto para cadastro
  const user = {
    name: '',
    username: '',
    email: '',
    password: ''
  }

  //useState para cadastro
  const [userCadastro, setUserCadastro] = useState(user);
  const [errors , setErrors] = useState([]);



  // Cadastrar usuário
  const cadastrar = (e) => {
    e.preventDefault()
    setErrors([]);
    fetch('http://localhost:8080/api/cadastrar',
      {
        method: 'post',
        body: JSON.stringify(userCadastro),
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
    .then(resultado => resultado.json())
    .then(resultado_convertido => {  
      console.log(resultado_convertido.errors);
      setErrors(resultado_convertido.errors);
    })
    .catch(e => {
      console.log(e);
    })
  }

  return (
    <FormularioAcesso>
      <div className='container-form'>

        <div className="content-form">
          <h2>Cadastre-se ao nosso site</h2>
          <form>
            <div className='name-username'>
              <label>
                Nome
                <br />
                <input type="text" name='name' className='name'
                  value={userCadastro.name}
                  onChange={(e) => setUserCadastro({ ...userCadastro, name: e.target.value })}
                />
                <span className='error'>{errors.name}</span>
              </label>
              
              <label>
                Username
                <input type="text" name='username' className='userName'
                  value={userCadastro.username}
                  onChange={(e) => setUserCadastro({ ...userCadastro, username: e.target.value })}
                />
                <span className='error'>{errors.username}</span>
              </label>
            </div>

            <div>
              <label>
                Email
                <input type="email" name='email' className='email'
                  value={userCadastro.email}
                  onChange={(e) => setUserCadastro({ ...userCadastro, email: e.target.value })}
                />
                <span className='error'>{errors.email} </span>
              </label>
              <br />
              <br />
              
              <label>
                Senha
                <input type="password" name='password' className='password'
                  value={userCadastro.password}
                  onChange={(e) => setUserCadastro({ ...userCadastro, password: e.target.value })}
                />
                <span className='error'>{errors.password}</span>
              </label>
              <br />
              <br />
            </div>

            <div className='btns'>
              <button>
                <span className='btn-icon'><FcGoogle /></span>
                <span className='btn-text'>Inscrever-se com Google</span>
              </button>
              <button onClick={cadastrar}  >Cadastrar</button>
            </div>

            <span className='fazerLogin'>
              Já tem uma conta?
              <Link to={'/'}> Sign In</Link>
            </span>
          </form>


          {/* <div className='erros'>
           {errors &&
            errors.map((error, index)=>{
                return <span key={index}>{error}</span>;
            }) 
           }
          
          </div> */}

        </div>

      </div>
    </FormularioAcesso>
  )
}

export default Signup