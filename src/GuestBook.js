import React, {useState} from 'react';
import CreateForm from './components/CreateForm';
import CommentList from './components/CommentList';
import commentData from './data/comment-data.json';
import { v4 } from 'uuid'; //npm install uuid

export default function GuestBook() {
  const [comments, setComments] = useState(commentData);
  return (
    <div className="gb-content">
      <CommentList comments={comments} />

      <CreateForm
        onAccess={(name, password, content, rating) => {
          const newComments = [
            ...comments,
            {
              date: "23-05-25",
              name,
              password,
              content,
              rating,
              id: v4()
            }
          ];
          setComments(newComments);
        }}
      />
    </div>
  );
}