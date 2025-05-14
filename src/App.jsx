import { useState } from "react"

export function App() {
 
  const [num, setNum] = useState(100)
  const [most, setMost] = useState("")
  const [desa, setDesa] = useState(false)

  function handleAumentar(){
    setNum(num + 100)
  }
  
  function handleMostar(){
    if(most === false) {
      setMost(true)
      setDesa("")
      return
    }

    setMost(false)
    setMost("marcio")
  }

  return(
   <main>
     
      <section>
        <p>numero: {num}</p>
        <button onClick={handleAumentar}>aumentar</button>
      </section>

       <section>
        <button onClick={handleMostar}>mostrar</button>
       </section>

      <h1>App</h1>
     
   </main>
  )
}