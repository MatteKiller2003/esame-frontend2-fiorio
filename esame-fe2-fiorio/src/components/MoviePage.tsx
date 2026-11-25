import { useEffect, useState } from "react"
import { getMovies } from "../api/api"
import type { MovieDetail } from "../types/Type"
import MovieCard from "./MovieCard"
import './MoviePage.css'

const MoviePage = () => {

    const [movies, setMovies] = useState<MovieDetail[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const inizializeMovieList = async () => {
      try {
        const data = await getMovies()
        setMovies(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Si è verificato un errore nel caricamento.")
      } finally {
        setLoading(false)
      }
    }

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

            {!loading && !error && (
            <div className="movie-grid">
                
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}

            </div>
            )}

        </>
    )
}

export default MoviePage