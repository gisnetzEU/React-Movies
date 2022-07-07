
import './Home.css';

const MovieList = (props) => {

	return (
		<div className='box'>
			{props.movies.map((movie, index) => (
				<div key={movie.movieUUID} className='image-container'>
					<img src={`http://localhost:8083/posters/${movie.posterPath}`} alt='movie'  width='150' onClick={() => {
						props.opendetail(movie.movieUUID) 						
					}}></img>
					<p onClick={() => {
						props.opendetail(movie.movieUUID)
					}}>
						{movie.title} ({movie.releaseYear})</p>
				</div>
			))}
		</div>
	);
};
export default MovieList;

