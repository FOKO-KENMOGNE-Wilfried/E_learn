import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './utilities/style/GlobalStyle.jsx'
import Navbar from './component/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Navbar />
      <GlobalStyle />
  </React.StrictMode>,
)
