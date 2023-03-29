import React from 'react';

const SingleCard = ({ movie, handelWatchTime }) => {
    const { movieName, watchTime, description, poster, imdbRating, category } = movie;
    // console.log('Movie', movie);
    return (
        <div>
            <div className="movie-card card text-center p-3 mb-4">
                <div className="movie-poster p-3">
                    <img className='img-fluid w-25' src={poster} alt="" />
                </div>
                <h4>Movie: {movieName}</h4>
                <p>Movie Ttype: {category}</p>
                <p>{description}</p>
                <div className="time-ratting d-flex justify-content-around">
                    <p>Watch Time: {watchTime}</p>
                    <p>Rating: {imdbRating}</p>
                </div>
                <button onClick={() => handelWatchTime(watchTime)} className='btn btn-info w-75 m-auto '>Book Now</button>
            </div>
        </div>
    );
};

export default SingleCard;