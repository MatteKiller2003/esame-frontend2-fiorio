
import { Link } from 'react-router'
import type { MovieDetailSummary } from '../types/Type'
import './MovieCard.css'

type Props = {
    movie: MovieDetailSummary
}

const MovieCard = ({ movie }: Props) => {
    return (
        <>

            <article className="card">
                {movie.poster_path ? (<img className="card__poster" alt={movie.title} src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}/>) : (<div className="card__poster">Poster</div>)}
                
                <div className="card__body">
                    <h2 className="card__title">
                        {movie.title}
                    </h2>
                    <p className="card__meta">Uscita: {movie.release_date ? new Date(movie.release_date).toLocaleDateString('it-IT') : 'N/D'}  · Voto: {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/D'}</p>
                    <p className="card__overview">
                        {movie.overview || "Trama non disponibile."}
                    </p>
                    <Link to={"/movies/" + movie.id} className='card__cta'>Dettaglio</Link>
                </div>
            </article>


        </>
    )
}

export default MovieCard