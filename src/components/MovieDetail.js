import '../detail.css'
import ReactPlayer from 'react-player'

function MovieDetail({ selected, exitbutton, trailer }) {

    return (
        <div className="detail">
            <div className="movie-card">
                <div className="container">
                    <a href="#"><img src={`https://filmstreamercontentmanager.herokuapp.com/images/${selected.posterPath}`} alt="cover" width='250' className="cover" /></a>                    
                    <div className="hero" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url('https://filmstreamercontentmanager.herokuapp.com/images/${selected.posterPath}')` }}>
                    {/* <div className="hero" style={{ backgroundImage: `url('http://localhost:8083/posters/${selected.posterPath}')` }}> */}
                        <div className="details">
                            <div className="title1">{selected.title} </div>
                            <div className="title2">Categories: {selected.genre}</div>                            
                        </div>
                    </div>
                    <div className="description">
                        <div className="column2">
                            <p>{selected.synopsis}</p>
                        </div>
                        <div className="column3">
                            <h3>Trailer:</h3>
                            {console.log(trailer)}                            
                            {/* <ReactPlayer width="100%" height="200px" url={`http://localhost:8083/api/videos/video/${selected.videoPath}`} playing /> */}
                            <ReactPlayer width="100%" height="200px" url={`https://imagenes-film-streamer-heroku.s3.eu-west-3.amazonaws.com/video/${selected.videoPath}`} playing />
                        </div>
                    </div>
                    <a href="#" onClick={() => exitbutton()} className="close" />
                </div>
            </div>
        </div>
    )
}

export default MovieDetail