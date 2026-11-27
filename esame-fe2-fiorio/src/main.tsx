import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Shell from "./components/Shell"
import { BrowserRouter, Route, Routes } from 'react-router'
import MoviesPage from './components/MoviesPage.tsx'
import MovieDetailPage from './components/MovieDetailPage.tsx'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shell />}>
          <Route index element={<MoviesPage />} />
          <Route path='/movies/:id' element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
