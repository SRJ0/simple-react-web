import React, { useState } from "react";

export default function CreateForm({ onAccess = f => f }){

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [content, setContent] = useState("");

    const submit = e => {
        e.preventDefault(); 
        onAccess(name, password, content);
        setName("");
        setPassword("");
        setContent("");
    };

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
                <button className="btn comment-btn">저장</button>
            </div>
        </form>
    );
}