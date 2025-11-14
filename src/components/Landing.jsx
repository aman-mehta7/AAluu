import React, { useState, useEffect } from 'react'

const Landing = ({ _setclicked }) => {
const passwordList = ['MAYAALUU', 'LOL', 'WTF', 'DONTKNOW', 'EYES']
  const [pass, setPass] = useState('')
  const [index, setIndex] = useState(0)

  // Load index from localStorage on component mount
  useEffect(() => {
    const savedIndex = localStorage.getItem('currentPasswordIndex')
    if (savedIndex !== null) {
      setIndex(Number(savedIndex))
    }
  }, [])

  const handleChange = (e) => {
    const inputValue = e.target.value
    setPass(inputValue)

    if (inputValue === passwordList[index]) {
      _setclicked(true)
      const nextIndex = (index + 1) % passwordList.length
      setIndex(nextIndex)
      localStorage.setItem('currentPasswordIndex', nextIndex)
      setPass('') // clear input
    }
  }

  return (
    <section className="flex justify-center items-center h-screen text-stone-100">
      <div>
        <h1>Enter password</h1>
        <input
          type="text"
          className="border border-white rounded-sm mt-1 p-1"
          value={pass}
          onChange={handleChange}
        />
      </div>
    </section>
  )
}

export default Landing