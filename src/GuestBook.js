
import React, {useState} from 'react';
// import StarRating from './StarRating';
import CreateForm from './components/CreateForm';
import CommentList from './components/CommentList';
import commentData from './data/comment-data.json';

export default function GuestBook() {
  // const [totalStars] = useState(5); //상태를 컴포넌트 트리 아래로 내려보낸다.
  const [comments, setComments] = useState(commentData);
  return (
    <div className="gb-content">
      <CommentList comments={comments} />

      <CreateForm
        onAccess={(name, password, content) => {
          const newComments = [
            ...comments,
            {
              date: "23-05-25",
              name,
              password,
              content
            }
          ];
          setComments(newComments);
        }}
      />
      {/* <StarRating
          style={{backgroundColor: "beige", margin: "10px"}}
          totalStars={totalStars}
      />
      <StarRating
          style={{backgroundColor: "skyblue", margin: "10px"}}
          totalStars={totalStars}
      /> */}
    </div>
  );
}