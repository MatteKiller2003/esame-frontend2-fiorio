import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { getMovieById } from "../api/api"
import type { MovieDetail } from "../types/Type"
import MovieDetailCard from "./MovieDetailCard"
import './MovieDetailPage.css'



const MovieDetailPage = () => {

    const [movie, setMovie] = useState<MovieDetail | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const { id } = useParams()

    const inizializeMovie = async () => {
        try {
          if (!id) return
          const data : MovieDetail = await getMovieById(id)
          setMovie(data)
        } catch (err) {
          setError(err instanceof Error ? err.message : "Errore durante il caricamento del dettaglio.")
          setMovie(null)
        } finally {
          setLoading(false)
        }
    }

    if(id) {
        document.title = `WireFrame - Movie ${id}`
    }

    useEffect(() => {
        inizializeMovie()
    }, [])


    return (

        <>

            <Link to="/" className="back-link">← Torna all’elenco</Link>

            {loading && <p>Caricamento dettagli...</p>}
            {error && <p style={{ color: "red" }}>Errore: {error}</p>}
            {movie && <MovieDetailCard movie={movie} />}

        </>

    )
}

export default MovieDetailPage