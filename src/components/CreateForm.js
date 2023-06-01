import React, { useState } from "react";
import {StarRating} from './StarRating';

export default function CreateForm({ onAccess = f => f }){
    const [totalStars] = useState(5); //상태를 컴포넌트 트리 아래로 내려보낸다.
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [content, setContent] = useState("");
    const [rating, setRating] = useState("");

    const submit = e => {
        e.preventDefault(); 
        onAccess(name, password, content, rating);
        setName("");
        setPassword("");
        setContent("");
        setRating("");
    };

    const rate = r => {
        setRating(r)
    }

    return (
        <form onSubmit={submit}>
            <div className="comment-area">
                <div>
                    <input
                        className="comment-info"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                        required
                    />
                    <input
                        className="comment-info"
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        required
                    />
                </div>
                <textarea
                    className="comment-content"
                    value={content} 
                    onChange={e => setContent(e.target.value)}
                    required
                />
                
                <StarRating
                    style={{backgroundColor: "beige", margin: "10px"}}
                    totalStars={totalStars}
                    onRate={rate}
                />
                <button className="btn comment-btn">저장</button>
            </div>
        </form>
    );
}