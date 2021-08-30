import React,{useState} from 'react'
import * as S from '../styled/App'

const Star = ({star}) => {

    return(
        <S.Box style={{fontSize:"15px"}}>
            <span>{star>= 1 ? <span>⭐</span>:<span>☆</span>}</span>
            <span>{star>= 2 ? <span>⭐</span>:<span>☆</span>}</span>
            <span>{star>= 3 ? <span>⭐</span>:<span>☆</span>}</span>
            <span>{star>= 4 ? <span>⭐</span>:<span>☆</span>}</span>
            <span>{star>= 5 ? <span>⭐</span>:<span>☆</span>}</span>
        </S.Box>
    );
}

export default Star