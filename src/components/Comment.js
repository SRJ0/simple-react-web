export default function Comment( { name, content, date } ) {
    return (
        <div className="gb-comment-item">
            <p>{name}</p>
            <p>{content}</p>
            <p>{date}</p>
        </div>
    )
}