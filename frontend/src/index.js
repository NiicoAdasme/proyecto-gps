import React from 'react'
import ReactDOM from 'react-dom/clientf'
import App from './App'
import { QueryClientProvider } from 'react-query'
import { queryClientConfig } from './queries/queryClientConfig'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClientConfig}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
) 
