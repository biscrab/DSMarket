import React from 'react'
import * as S from '../styled/App'
import profile from '../images/profile.png'

const Comment = ({item}) => {
    return(
        <S.CommentLi>
            <S.CProfile src={profile}></S.CProfile><S.CommentGray>{item.name}</S.CommentGray><S.CommentSpan>{item.comment}</S.CommentSpan>
        </S.CommentLi>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <Comment item={item} comment={item.comment} name={item.name}/>
        )
    ) 
    return itemList;
}

export default List