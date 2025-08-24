import React, { useState } from 'react'
import Canva from './sections/Canva'
import Landing from './components/Landing'

const App = () => {
  const [clicked, _setclicked] = useState(null)
  return (
        <main>
          {clicked ? <Canva /> : <Landing _setclicked={_setclicked} />}
        </main>
  )
}

export default App
