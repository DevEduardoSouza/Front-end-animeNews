import React from 'react'
import './FormularioAcesso.css'

const FormularioAcesso = (props) => {
  //useState

  return (
    <div>
      <div className="container">

        <div className="content">

          <div className="box-img">
            <img src="https://i.pinimg.com/564x/02/9b/06/029b06b8e04f7a4a6b28b81745dc9a7a.jpg" alt="img capa" />

            <div className="text">
              <h1>生の情報でマンガ・アニメの世界を紐解こう！</h1>
            </div>
          </div>

          <div className="box-acesso">
            {
              props.children
            }
          </div>

        </div>
      </div>

    </div>
  )
}

export default FormularioAcesso