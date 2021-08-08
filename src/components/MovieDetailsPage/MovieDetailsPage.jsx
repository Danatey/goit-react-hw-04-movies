const MovieDetailsPage = ({img, name, score, overview, genres}) => {
    return <>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <h2>{name}</h2>
            <p>{score}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genres}</p>
        </div>
    </>
}

export default MovieDetailsPage;