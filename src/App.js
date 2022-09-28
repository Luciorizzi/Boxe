import "./App.css";
import Forms from "./Components/Forms";
function App() {
  return (

    <div className="App">
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
        <ul className="social_icon">
          <li>
            <a href="mailto:soporteboxe@gmail.com">
              <img src="https://i.imgur.com/zSww71r.png?1" alt="email"></img>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/soporteboxe/">
              <img
                src="https://i.imgur.com/oBYoLfY.png?1"
                alt="instagram"
              ></img>
            </a>
          </li>
          <li>
            <a href="https://wa.me/5491173603596">
              {" "}
              <img src="https://i.imgur.com/4gVSUZz.png?1" alt="whatsapp"></img>
            </a>
          </li>
        </ul>
      </footer>
     
    </div>
  );
}

export default App;
