import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from '@/config/router'
import Header from './header'
import Footer from './footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='flex-1'>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
