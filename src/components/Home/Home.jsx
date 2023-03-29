import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCart/SingleCard';

const Home = ({handelWatchTime}) => {
    const [movies, setMovies] = useState([]);
    // console.log('Movie', movies);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])

    return (
        <div>
            <div className="movie-container">
                {
                    movies.map(movie => <SingleCard 
                        key={movie.poster} 
                        movie={movie}
                        handelWatchTime={handelWatchTime}
                        ></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Home;