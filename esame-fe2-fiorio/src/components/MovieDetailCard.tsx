
import type { MovieDetail } from '../types/Type'
import './MovieDetailCard.css'

type Props = {
    movie: MovieDetail
}

const MovieDetailCard = ({ movie }: Props) => {
    return (
        <>
            <article className="detail">
                <div>
                    {movie.poster_path ? (<img className="detail__poster" alt={movie.title} src={`https://image.tmdb.org/t/p/w500${movie.poster_path} `}/>) : 
                    (
                    <div className="detail__poster">Poster</div> )}
                </div>

                <div>
                    <h1 className="detail__title">
                        {movie?.title}
                    </h1>
                    {movie.tagline && <p className="detail__tagline">“{movie.tagline}”</p>}

                    <ul className="detail__meta">
                        <li>Uscita: {movie.release_date ? new Date(movie.release_date).toLocaleDateString('it-IT') : 'N/D'}</li>
                        <li>Durata: {movie.runtime ? `${movie.runtime} min` : 'N/D'}</li>
                        <li>Voto: {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/D'}</li>
                        <li>Voti: {movie.vote_count ? movie.vote_count.toLocaleString('it-IT') : 'N/D'}</li>
                        <li>Stato: {movie.status || 'N/D'}</li>
                        <li>Lingua: {movie.spoken_languages?.[0]?.english_name || movie.original_language || 'N/D'}</li>
                    </ul>

                    {movie.genres && movie.genres.length > 0 && (
                    <div className="detail__genres">
                        {movie.genres.map((genre) => ( <span key={genre.id} className="genre">{genre.name}</span> ))}
                    </div>
                    )}


                    <p className="detail__overview-label">Trama</p>
                    <p className="detail__overview">
                        {movie.overview || "Trama non disponibile per questo film."}
                    </p>

                    {movie.production_companies && movie.production_companies.length > 0 && (
                    <p className="card__meta">
                        Produzione: {movie.production_companies.map((c) => c.name).join(' · ')}
                    </p>
                    )}
                </div>
            </article>
        </>
    )
}

export default MovieDetailCard