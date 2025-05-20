import { useState } from "react"

export function App() {
 
  const [num, setNum] = useState(100)
  const [most, setMost] = useState(false)

  function handleAumentar() {
    setNum(num + 100)
  }
  
  function handleMost() {
    if (most === true) {
       setMost(false)
       return
    }
    
    setMost(true)
  }

  return(
   <main>
     <h1>Exercicio useState</h1>

      <section>
        <p>numero: {num}</p>
        <button onClick={handleAumentar}>aumentar</button>
      </section>

       <section>
        <h2>o parágrafo que some</h2>
        {most ? <p>Em breve irei sumir</p> :""}
        <button onClick={handleMost}>{most ? "esconder" : "mostrar"}</button>
       </section>
     
   </main>
  )
}