import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/index.jsx'
import GlobalStyle from './utilities/style/GlobalStyle.jsx'
import Navbar from './component/Navbar.jsx'
import Progress from './pages/Progress/index.jsx'
import Message from './pages/Messages/index.jsx'
import Setting from './pages/Setting/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Navbar />
      <GlobalStyle />
  </React.StrictMode>,
)
