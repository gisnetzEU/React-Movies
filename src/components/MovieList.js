
import './Home.css';

const MovieList = (props) => {

	return (
		<div className='box'>
			{props.movies.map((movie, index) => (
				<div key={movie.movieUUID} className='image-container'>
					<br></br>
					<img src={`https://filmstreamercontentmanager.herokuapp.com/images/${movie.posterPath}`} alt='movie' width='150' onClick={() => {
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

