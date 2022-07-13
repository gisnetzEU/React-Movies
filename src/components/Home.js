import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './Home.css';
import MovieDetail from './MovieDetail';
import MovieList from './MovieList';
import SearchBox from './SearchBox';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [selected, setSelected] = useState({});

	const getMovieRequest = async (searchValue) => {
		if (!searchValue) {
			return;
		}		
		const url = `https://filmstreamer.herokuapp.com/api/movies/getMoviesByTitleContaining/${searchValue}`;		
		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson) {
			setMovies(responseJson);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	const exitButton = () => {
		setSelected({});
	}

	const openDetail = (UUID) => {				
		const api = `https://filmstreamer.herokuapp.com/api/movies/getMovie/${UUID}`;
		axios(api)
			.then(res => res)
			.then(data => {
				setSelected(data.data);
			})
	}

	return (
		<>
			<div align="center">				
			</div>
			<div className='container' >
				<div className='row d-flex align-items-center mt-4 mb-4' >					
					<img
						src="https://t-mobile.scene7.com/is/image/Tmusprod/netflix-hero.desktop?wid=1280&hei=360&fmt=png-alpha"
						alt=""
					/>
				</div>
				<div className='row justify-content-md-center'>
					<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
				</div>
				<div className='row'>
					<MovieList
						movies={movies}
						opendetail={openDetail}					
					/>
				</div>
				<div className='row'>
					{console.log('selected', (typeof selected.title) != 'string' ? false : true)}
					{
						(typeof selected.title != 'string')
							? false
							: <MovieDetail selected={selected} exitbutton={exitButton}
							/>
					}
				</div>
			</div>
		</>
	);
};

export default App;
