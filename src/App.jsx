import { useState } from 'react'
import Main from './components/Main'

function App() {
  const [dark, setDark] = useState(true)
  return (
    <div className={dark ? "dark" : ""}>
      <Main />      
    </div>
  )
}

export default App
