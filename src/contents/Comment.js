import React from 'react'
import * as S from '../styled/App'
import Star from '../contents/Star'
import profile from '../images/profile.png'

const Comment = ({item}) => {
    return(
        <S.CommentLi>
            <S.CProfile src={profile}></S.CProfile><S.CommentGray>{item.name}</S.CommentGray><S.CommentSpan>{item.comment}</S.CommentSpan><Star star={1} />
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