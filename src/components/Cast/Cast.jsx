const Cast = ({ cast }) => {
    return <div>
        {cast.map(({ castImg, castName, castCharacter }) => (
            <li key={cast.castName}>
                <img src={castImg} alt={castName} />
                <p>{castName}</p>
                <p>{castCharacter}</p>
            </li>
        ))}
    </div>
}
export default Cast;