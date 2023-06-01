import {StarRating2} from "./StarRating";

export default function Comment( { name, content, date, rating } ) {
    return (
        <div className="gb-comment-item">
            <p>{name}</p>
            <p>{content}</p>
            <p>{date}</p>
            <p>{rating}</p>
            <p><StarRating2 selectedStars={rating}/></p>
        </div>
    )
}