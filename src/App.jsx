import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './config/routes'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          const PageComponent = route.element
          const HeaderComponent = route.header
          const FooterComponent = route.footer

          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <div className="App">
                  {HeaderComponent && <HeaderComponent />}
                  <main className="main-content">
                    <PageComponent />
                  </main>
                  {FooterComponent && <FooterComponent />}
                </div>
              }
            />
          )
        })}
      </Routes>
    </Router>
  )
}

export default App

