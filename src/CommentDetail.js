import React from 'react';
import ReactDOM from 'react-dom';

const CommentDetail = (props) => {
    return (
        <div>
            <img src='public/logo512.png' />
            <h4>{props.item.c_name}</h4>
            <p>{props.item.c_data}</p>
        </div>
    );
}

export default CommentDetail;