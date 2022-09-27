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
  <div class="waves">
    <div class="wave" id="wave1"></div>
    <div class="wave" id="wave2"></div>
    <div class="wave" id="wave3"></div>
    <div class="wave" id="wave4"></div>
  </div>
  <ul class="social_icon">

    <li><a href="mailto:soporteboxe@gmail.com"><img src="https://i.imgur.com/zSww71r.png?1" alt="email"></img></a></li>
    <li><a href="https://www.instagram.com/soporteboxe/"><img src="https://i.imgur.com/oBYoLfY.png?1" alt="instagram"></img></a></li>
    <li><a href="https://wa.me/5491173603596"> <img src="https://i.imgur.com/4gVSUZz.png?1" alt="whatsapp"></img></a></li>
  </ul>
  
</footer>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
<script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
    </html>
    
  );
}

export default App;
