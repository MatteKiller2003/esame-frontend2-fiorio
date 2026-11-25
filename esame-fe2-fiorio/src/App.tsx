
import './App.css'
import Shell from "./components/Shell"
import { BrowserRouter, Route, Routes } from 'react-router'
import MoviePage from './components/MoviePage.tsx'
import MovieDetailPage from './components/MovieDetailPage.tsx'

function App() {

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shell />}>
          <Route index element={<MoviePage />} />
          <Route path='/movies/:id' element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
