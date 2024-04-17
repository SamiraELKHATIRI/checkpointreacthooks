import React from 'react';

const MovieCard = ({title , desscription, posterURL , rating}) => {
    return (
        <div className='movie-card'>
            <img src={posterURL} alt = {title} />
            <h2>{title}</h2>
            <p>{desscription}</p>
            <p>Rating:{rating}</p>
        </div>
    )
}

export default MovieCard;