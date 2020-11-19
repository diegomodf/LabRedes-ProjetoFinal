import './App.css';
import {useState} from "react";


function App() {
  const [links, setlinks] = useState("")
  function concatlink(link){
    setlinks(link)
  }
  return (
    <>
      <button onClick={()=>concatlink("https://picsum.photos/200")}>Botão1</button>
      <button onClick={()=>concatlink("https://picsum.photos/300")}>Botão2</button>
      <button onClick={()=>concatlink("https://picsum.photos/400")}>Botão3</button>
      <img src={links}/>
    </>
  );
}

export default App;
