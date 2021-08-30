import React,{useState} from 'react'

const Star = ({star}) => {

    return(
        <div>
            <span>{star>= 1 ? <span>⭐</span>:<span>☆</span>}</span>
            <span>{star>= 2 ? <span>⭐</span>:<span>☆</span>}</span>
            <span>{star>= 3 ? <span>⭐</span>:<span>☆</span>}</span>
            <span>{star>= 4 ? <span>⭐</span>:<span>☆</span>}</span>
            <span>{star>= 5 ? <span>⭐</span>:<span>☆</span>}</span>
        </div>
    );
}

export default Star