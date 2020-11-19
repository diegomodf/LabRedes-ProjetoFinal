import './App.css';
import {useState} from "react";


function App() {
  const [links, setlinks] = useState("")
  function concatlink(link){
    setlinks(link)
  }
  return (
    <>
      <div className="container">
        <div className="card">
          <button onClick={()=>concatlink("https://picsum.photos/200")}>Botão1</button>
        </div>
        <div className="card">
          <button onClick={()=>concatlink("https://picsum.photos/300")}>Botão1</button>
        </div>
        <div className="card">
          <button onClick={()=>concatlink("https://picsum.photos/400")}>Botão1</button>
        </div>
      </div>
      <div className="container-foto">
        <img alt="imagem" src={links}/>
      </div>
    </>
  );
}

export default App;
