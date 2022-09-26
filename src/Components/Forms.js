import "./Forms.css";

const Forms = () => {
  return (
    <form className="form_container">
      <input className="form_item" type="name" placeholder="Nombre completo"></input>
      <input className="form_item" type="tel" placeholder="Numero 011 5555-5555 "></input>
      <input className="form_item" type="email" placeholder="ejemplo@ejemplo.com"></input>
      <input className="form_item" type="text" placeholder="Localidad"></input>
      <textarea rows="10" cols="80" className="form_textarea" placeholder="Motivo de contacto"></textarea>
        <button className="form_button">Enviar</button>
    </form>
  );
};

export default Forms;
