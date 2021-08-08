const Reviews = ({ review }) => {
    return <div>
        {review.map(({ author, view }) => (
            <li key={author}>
                <h3>{author}</h3>
                <p>{view}</p>
            </li>
        ))}
    </div>
}
export default Reviews;