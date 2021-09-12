import React from 'react'
import * as S from '../styled/MyPage'
import profile from '../images/profile.png'

const Review = ({item}) => {
    return(
        <S.ReviewLi>
            <div>
            <S.RProfile src={profile}></S.RProfile><span>{item.name}</span>
            </div>
            <S.Span>{item.review}</S.Span>
        </S.ReviewLi>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <Review item={item} review={item.review} name={item.name}/>
        )
    ) 
    return itemList;
}

export default List