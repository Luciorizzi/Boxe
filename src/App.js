import "./App.css";
import Forms from "./Components/Forms";
function App() {
  return (
    <html className="App">
      <header className="App-header">
        <img src="https://i.imgur.com/GcVQ81Y.jpg?1" alt="logo" />
        <h1>Formulario de contacto</h1>
      </header>
      <div>
        <Forms />
      </div>
      <footer>
        <p className="footer_item">soporteboxe@gmail.com</p>
        <p className="footer_item">011 7360-3596</p>
        <img className="footer_item" src="https://i.imgur.com/4gVSUZz.png?1"></img>
        <img className="footer_item" src="https://i.imgur.com/oBYoLfY.png?1"></img>
        
      </footer>
    </html>
  );
}

export default App;
