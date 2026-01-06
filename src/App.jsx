import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './config/routes'

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true }}>
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

