import { useEffect, useState } from "react"
import { getMovies } from "../api/api"
import type { MovieResponse, MovieDetailSummary } from "../types/Type"
import MovieCard from "./MovieCard"
import './MoviesPage.css'

const MoviesPage = () => {

    const [movies, setMovies] = useState<MovieDetailSummary[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const inizializeMovieList = async () => {
      try {
        const data : MovieResponse = await getMovies()
        setMovies(data.results)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Si è verificato un errore nel caricamento.")
      } finally {
        setLoading(false)
      }
    }
    
    document.title = `WireFrame - Elenco Movies`

    useEffect(() => {
        inizializeMovieList()
    }, [])


    return (
        <>

            <h1 className="page-title">The Lord of the Rings</h1>
            <p className="page-sub">
                Risultati fissi da API · query=The Lord of the Rings · page=1 · max 20
                items · senza filtri / paginazione
            </p>

            {loading && <p>Caricamento film in corso...</p>}

            {error && <p style={{ color: "red" }}>Errore: {error}</p>}

            
            <div className="movie-grid">
                
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}

            </div>
            

        </>
    )
}

export default MoviesPage