import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { OrdersProvider } from './contexts/OrdersProvider'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.min.css'

export function App() {
  return (
    <>
      <OrdersProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <BrowserRouter>
            <Router />
            <ToastContainer
              autoClose={3000}
              pauseOnHover={false}
              style={{ width: 'max-content' }}
            />
          </BrowserRouter>
        </ThemeProvider>
      </OrdersProvider>
    </>
  )
}
