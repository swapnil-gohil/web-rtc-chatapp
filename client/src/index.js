import React from "react"
import App from './App'
import './styles.css'
import { ContextProvider } from './SocketContext'
// import { createRoot } from 'react-dom/client'
// createRoot(document.getElementById('root')).render(
//     <ContextProvider>
//         < App/>
//     </ContextProvider>    
// )

import ReactDOM from 'react-dom';
ReactDOM.render(
    <ContextProvider>
      <App />
    </ContextProvider>,
    document.getElementById('root'),
)