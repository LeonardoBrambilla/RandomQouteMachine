import {TwitterLogo} from "phosphor-react"
import { useEffect,useState } from "react";
import axios from 'axios'
import './App.css'

function App() {
  const [data,setData] = useState("")
  useEffect(() => {
    const get = async () => {
      const {data} = await axios.get("https://type.fit/api/quotes")
      setData(data[Math.floor(Math.random()*data.length)])
    }
    get()
  }, [])

  return (
    <div id="wrapper" className="App">    
      <div className='qoute-box' id="quote-box">
        <div className="quote-text">          
          <h1 id="text">{data.text}</h1>
        </div>
        <div className="quote-author">
          
          <h1 id="author">- {data.author}</h1>
        </div>
        <div className="buttons">
          <a id="twet-qoute" href="https://twitter.com/intent/tweet" target="_top">
            <TwitterLogo size={32} />
          </a>
          <button id="new-qoute" onClick={()=>window.location.reload()}>
            New Qoute
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
