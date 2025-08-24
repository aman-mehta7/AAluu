import React from 'react'

const Landing = ({ _setclicked }) => {
  return (
    <section className='' >
        <button onClick={() => _setclicked(true)}>Load Canvas</button>
    </section>
  )
}

export default Landing