import Comment from './Comment';

export default function CommentList( { comments = [] } ) {
    if(!comments.length) return (<div>등록된 회원이 없습니다.</div>);
    return (
        <div className="gb-comment-list">
            {
                comments.map(comments => <Comment key={comments.id} {...comments}/>)
            }
        </div>
    );
}