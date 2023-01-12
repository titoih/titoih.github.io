import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";

const Form = () => {

  init(process.env.REACT_APP_API_PUBLIC_KEY);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.current)
    emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, form.current).then(
      (result) => {
        alert(`Mensaje Enviado, te contesto en ná!`)
        window.location.reload(false);
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    )
  }
  return (
    <article className="container-md h-100">
      <header>
        <h2 className="display-3 mb-5"><strong><i>Contáctame</i></strong></h2>
      </header>
      <div className="fs-5 lh-lg">
        <form onSubmit={handleSubmit} ref={form}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="First Name">¿Cómo te llamas?</label>
            <input type="text" className="form-control" name="firstname" />
          </div>
            <div className="form-group col-md-6">
              <label htmlFor="First Name">Indícame tu email y te responderé rápido</label>
              <input type="email" className="form-control" name="userEmail" />
            </div>
          <div className="form-group col-md-6">
            <label htmlFor="message">¿Qué necesitas consultar?</label>
            <textarea
              type="text"
              className="form-control"
              id="inputmessage4"
              name="user_message"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      </div>
    </article>
  )
}
export default Form