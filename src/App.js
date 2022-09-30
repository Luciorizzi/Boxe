import "./App.css";
import Forms from "./Components/Forms";
function App() {
  return (
    <div className="App">
      <title>Boxe</title>
      <header className="App-header">
        <img src="https://i.imgur.com/GcVQ81Y.jpg?1" alt="logo" />
        <h1>Formulario de contacto</h1>
      </header>
      <div>
        <Forms />
      </div>
      <footer>
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>

        <img
          className="boxe_footer"
          src="https://i.imgur.com/yGBBMAI.jpg"
          alt="logoboxe"
        />

        <ul className="social_icon">
          <li>
            <a href="mailto:soporteboxe@gmail.com">
              <img src="https://i.imgur.com/RbqiWlI.png" alt="email"></img>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/soporteboxe/">
              <img src="https://i.imgur.com/iYi42Mj.png" alt="instagram"></img>
            </a>
          </li>
          <li>
            <a href="https://wa.me/5491173603596">
              {" "}
              <img src="https://i.imgur.com/q58fuw2.png" alt="whatsapp"></img>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
