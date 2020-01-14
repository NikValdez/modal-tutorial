import React, { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const outside = useRef()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = e => {
    if (outside.current.contains(e.target)) {
      return
    }
    setIsOpen(false)
  }

  useEffect(() => {
    const getClick = document.addEventListener('click', handleClick)

    return () => {
      getClick()
    }
  }, [])

  return (
    <div className="App" ref={outside}>
      <button onClick={() => setIsOpen(!isOpen)}>toggle modal</button>
      {isOpen ? (
        <div className="modal">
          <p>Modal is open</p>
        </div>
      ) : null}
    </div>
  )
}

export default App
