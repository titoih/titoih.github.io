import React, { useEffect, useState } from 'react'
import titoIA from '../images/titoIA.jpeg'
import axios from 'axios'


const Main = () => {
  const [quote, setQuote] = useState({
    content: 'loading...',
    author: 'loading'
  })
  
  useEffect(() => {
    test()
  }, []);

  const test = async () => {
    const options = {
      method: 'GET',
      url: 'https://quotes15.p.rapidapi.com/quotes/random/',
      params: { language_code: 'es' },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDKEY,
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
      }
    }
    const response = await axios(options)
    setQuote({content: response.data.content, author: response.data.originator.name})
    console.log(response)
  }

  const handleQuote = () => {
    test()
  }

  return (

    <article className="container-md h-100">
      <header>
        <h2 className="display-3 mb-5"><strong><i>Sobre mí</i></strong></h2>
      </header>
      <div className="fs-5 lh-lg">
        <div className="">
          <img className="imgAboutme m-3" src={titoIA} alt="Img from me" title="Island!" />
        </div>
        <div className="">
        <p>
          Me llamo Santi, soy <b>desarrollador</b> y <b>marketer</b>. Vivo en una estupenda isla: Tenerife - Canarias.
        </p>
        <p>
          Mi primer proyecto lo inicié con 6 años: vender los limones de mi árbol, ¡a 100 pesetas cada limón! Sorprendentemente salió mal...
        </p>
        <p>
          Un año más tarde, y sin darme por vencido, creé con mi vecino Eduardo una revista/comic de <i>humor</i> que
          intenté vender a los vecinos (hicimos a mano 3 copias idénticas.)
        </p>
        <p>
          Me gustan: los retos difíciles, conocer personas, ayudar a quien lo solicita y emprender nuevos proyectos.
        </p>
        </div>
      </div>
      <div className="card mt-5 d-lg-w-75">
        <div className="card-header ">
          Frase del día
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{quote.content}</p>
            <footer className="blockquote-footer">Autor: <cite title="Source Title">{quote.author}</cite></footer>
          </blockquote>
        </div>
        <div>
          <span className="m-2">¿No te gusta esta frase?</span>
          <button className="btn btn-primary m-2" onClick={handleQuote}>Cambiar</button>
        </div>
      </div>
    </article>
  )
}

export default Main