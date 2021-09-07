import React from 'react'
import * as S from '../styled/App'
import Star from '../contents/Star'

const Comment = ({item}) => {
    return(
        <S.CommentLi>
            <Star star={1} /><S.CommentSpan>{item.comment}</S.CommentSpan><S.CommentGray>작성자:</S.CommentGray><span>{item.name}</span>
        </S.CommentLi>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <Comment item={item} star={item.star} comment={item.comment} name={item.name}/>
        )
    ) 
    return itemList;
}

export default List