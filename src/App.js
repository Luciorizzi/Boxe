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

  <div class="waves">
    <div class="wave" id="wave1"></div>
    <div class="wave" id="wave2"></div>
    <div class="wave" id="wave3"></div>
    <div class="wave" id="wave4"></div>
    </div>

  <img  className="boxe_footer" src="https://i.imgur.com/yGBBMAI.jpg" alt="logoboxe"/>

  <ul class="social_icon">

    <li><a href="mailto:soporteboxe@gmail.com"><img src="https://i.imgur.com/RbqiWlI.png" alt="email"></img></a></li>
    <li><a href="https://www.instagram.com/soporteboxe/"><img src="https://i.imgur.com/iYi42Mj.png" alt="instagram"></img></a></li>
    <li><a href="https://wa.me/5491173603596"> <img src="https://i.imgur.com/q58fuw2.png" alt="whatsapp"></img></a></li>
  </ul>
  
</footer>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
<script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
</div>

  );
}

export default App;
