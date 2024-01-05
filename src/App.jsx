import React from 'react'
import Navbar from './componenets/Navbar'
import Card from './componenets/Card'
import { QuoteProvider } from './context/QuoteContex'

const App = () => {
  return (
    <QuoteProvider>
     <Navbar/>
     <Card/>
    </QuoteProvider>
  )
}

export default App
