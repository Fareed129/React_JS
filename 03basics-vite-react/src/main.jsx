
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const reactElem= React.createElement('a', {
    href:'https://www.google.com',
    target: '_blank'
}, 'click me to go google')


createRoot(document.getElementById('root')).render(
    
    reactElem

  
)
