import { useState } from "react"

export function App() {
 
  const [num, setNum] = useState(100)
  const [most, setMost] = useState(true)
  const [desa, setDesa] = useState(true)

  function handleAumentar(){
    setNum(num + 100)
  }
  
  function handleMostar(){
    if(most ===false) {
      setMost(true)
      setDesa("matheus")
      return
    }

    setMost(false)
    setMost("marcio")
  }

  return(
   <main>
      <h1>App</h1>
     
       <section>
        <p>O número da variável é: {num}</p>
        <button onClick={handleAumentar}>Aumentar</button>
       </section>
   
       <section>
        <p>mostrar o número da variavel {most}</p>
        
        <button onClick={handleMostar}>mostrar</button>
       </section>

   </main>
  )
}