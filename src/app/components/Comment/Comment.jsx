import React, { useState } from 'react';

import like from "./images/like.svg";
import liked from "./images/liked.svg";
import comment from "./images/comment.svg";

const Comment = () => {
    const [activeButton, setActiveButton] = useState(null);
    const [comments, setComments] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [likes, setLikes] = useState(0);
    const [author] = useState('Eva Jonson');
    const [error, setError] = useState(null);

    function handleButtonClick(buttonNumber) {
        if (buttonNumber === activeButton) {
            setActiveButton(null);
        } else {
            setActiveButton(buttonNumber);
        }
    }

    function getButtonClassName(buttonNumber) {
        let className = "comment__button";
        if (buttonNumber === activeButton) {
            className += " comment__button--active";
        }
        return className;
    }

    function handleAddComment() {
        if (inputValue.trim() !== '') {
            const now = new Date();
            const timestamp = now.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
            const newComment = { text: inputValue, liked: false, timestamp, author };
            setComments([...comments, newComment]);
            setInputValue('');
            setError(null);
        } else {
            setError('Please enter a comment before submitting.');
        }
    }

    function formatDate(date) {
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }

    function handleInputChange(event) {
        setInputValue(event.target.value);
        setError(null);
    }

    function handleLike(index) {
        const newComments = [...comments];
        const comment = newComments[index];
        comment.liked = !comment.liked;
        setComments(newComments);
        setLikes(likes + (comment.liked ? 1 : -1));
    }

    function handleKeyDown(event) {
        if (event.ctrlKey && event.key === 'Enter') {
            handleAddComment();
        }
    }

    return (
        <div className="comment">
            <div className="comment__header">
                <div className="comment__buttons-wrap">
                    <button
                        className={getButtonClassName(1)}
                        onClick={() => handleButtonClick(1)}
                    >
                        Latest reviews
                    </button>
                    <button
                        className={getButtonClassName(2)}
                        onClick={() => handleButtonClick(2)}
                    >
                        All reviews
                    </button>
                </div>
                <div className="comment__statistic">
                    <div className="comment__wrap">
                        <img className="comment__like-icon" src={like} alt="like icon"/>
                        <p>{likes}</p>
                    </div>
                    <div className="comment__wrap">
                        <img className="comment__feedback-icon" src={comment} alt="comment icon"/>
                        <p>{comments.length}</p>
                    </div>
                </div>
            </div>
            <div className="comment__list">
                {comments.map((comment, index) => (
                    <div className="comment__list-item" key={index}>
                        <div className="comment__inner">
                            <span className="comment__author">{comment.author}</span>
                            <span className="comment__date">{formatDate(new Date(comment.timestamp))}</span>
                        </div>
                        <p className="comment__message" title={comment.text}>{comment.text}</p>
                        <button className="comment__like-button" onClick={() => handleLike(index)}>
                            <img className="comment__like-icon" src={comment.liked ? liked : like} alt="like icon"/>
                        </button>
                    </div>
                ))}
            </div>
            <div className="comment__add-comment">
                <textarea
                    className="comment__textarea"
                    id="comment-input"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                {error && (
                    <p className="comment__error">Comment can't be empty!</p>
                )}
                <button className="comment__btn" onClick={handleAddComment}>Send a message</button>
            </div>
        </div>
    );
}

export default Comment;
