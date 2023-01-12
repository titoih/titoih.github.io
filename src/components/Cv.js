import React from 'react'

const Cv = () => {
  return (
    <article className="container-md">
      <header>
        <h2 className="display-3 mb-5"><strong><i>Formación</i></strong></h2>
      </header>
      <div className="fs-5 lh-lg">
        <dl>
          <dt>Negocio ‍💼💰📈</dt>
          <ul>
            <li>Licenciado en Economía</li>
            <li>Master Publicidad y Comunicación - ICADE</li>
          </ul>
          <dt>Técnica ‍‍💻👨‍💻👍</dt>
          <ul>
            <li>Máster en Web Developement - IRONHACK</li>
            <ul>
              <li>Fullstack MERN: NodeJS, React, MongoDB, Express, Redux</li>
            </ul>
            <li>DAW Desarollo Web - CSIF</li>
            <ul>
              <li>JAVA, SQL</li>
            </ul>
          </ul>
        </dl>
        <header>
          <h2 className="display-3 mb-5"><strong><i>Experiencia profesional</i></strong></h2>
        </header>
        <dl>
          <dt>Freelance - Actualmente</dt>
          <dd>Desarrollo Web, desarrollo de negocio y consultaría digital</dd>
          <dt>Director Online en Grupo Número 1</dt>
          <dd>Ene 2021 - Ene 2023</dd>
          <dt>Director Growth en Indigitall</dt>
          <dd>Jun 2020 - Dic 2020 (Pandemia)</dd>
          <dt>Director Online en Calleja Motos</dt>
          <dd>Jun 2018 - Jun 2020</dd>
          <dt>Marketing Specialist en Milanuncios.com</dt>
          <dd>Ene 2012 - Jun 2018</dd>
          <dt>Product Manager en Marca.com</dt>
          <dd>Mayo 2011 - Ene 2012</dd>
        </dl>
        <header>
          <h2 className="display-3 mb-5"><strong><i>Proyectos personales</i></strong></h2>
        </header>
        <dl>
          <dt><i>Aplicaicón en curso</i></dt>
          <dd>React, Node, Express, MongoDB</dd>
          <dt>BuenAnuncio.com</dt>
          <dd>HBS, Node, MongoDB, Express</dd>
          <dt>Algodiscreto.com</dt>
          <dd>Negocio. Hito: 70.000 visitas/día en menos de 2 años</dd>
          <dt>Chollopolis.com - Ecommerce moda</dt>
          <dd>Negocio. Hito: venta internacional sin stockage de producto</dd>
        </dl>

      </div>
    </article>

  )
}

export default Cv