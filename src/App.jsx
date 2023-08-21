import React from 'react'
import PasswordGenarator from './components/PasswordGenarator'
import Title from './components/Title'
function App() {

  return (
    <div className='w-full h-screen grid place-items-center'>
      <Title />
      <PasswordGenarator />
    </div>
  )
}

export default App
