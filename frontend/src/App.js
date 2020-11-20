import './App.css';
import {useState} from "react";


function App() {
  const [links, setlinks] = useState("")
  function concatlink(link){
    setlinks(link)
  }
  return (
    <>
    <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
    </head> 
      <div className="container">
        <div className="titulo">
          <h3>Selecione para que tipo dispositivo você deseja uma imagem!</h3>
        </div>
        <div className="card">
          <h1>Ipad</h1><i class="material-icons">tablet_mac</i>
          <div className="button">
            <button onClick={()=>concatlink("https://picsum.photos/2732/2048")}><i class="material-icons">keyboard_arrow_down</i></button>
          </div>
        </div>
        <div className="card">
          <h1>Iphone X</h1><i class="material-icons">phone_iphone</i>
          <div className="button">
            <button onClick={()=>concatlink("https://picsum.photos/1125/2436")}><i class="material-icons">keyboard_arrow_down</i></button>
          </div>
        </div>
        <div className="card">
          <h1>MacBook Air 13</h1><i class="material-icons">laptop_mac</i>
          <div className="button">
            <button onClick={()=>concatlink("https://picsum.photos/2560/1600")}><i class="material-icons">keyboard_arrow_down</i></button>
          </div>
        </div>
      </div>
      <div className="container-foto">
        <a href={links}><img alt="imagem" src={links} className="responsive"/></a>
      </div>
    </>
  );
}

export default App;
