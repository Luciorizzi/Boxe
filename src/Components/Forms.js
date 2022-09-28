import "./Forms.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Forms = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w8664bn",
        "template_gycnflk",
        form.current,
        "Xco0YNpWvxczvfEmS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="form_container" ref={form} onSubmit={sendEmail}>
      <input
        className="form_item"
        type="name"
        placeholder="Nombre completo"
        name="name"
      ></input>
      <input
        className="form_item"
        type="tel"
        placeholder="Numero 011 5555-5555 "
        name="location"
      ></input>
      <input
        className="form_item"
        type="email"
        placeholder="ejemplo@ejemplo.com"
        name="email"
      ></input>
      <input
        className="form_item"
        type="text"
        placeholder="Localidad"
        name="num"
      ></input>
      <textarea
        rows="10"
        cols="80"
        className="form_textarea"
        placeholder=" Motivo de contacto"
        name="motive"
      ></textarea>
      <button className="form_button">Enviar</button>
    </form>
  );
};

export default Forms;
