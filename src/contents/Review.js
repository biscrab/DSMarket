import React, { useState } from 'react'
import * as S from '../styled/MyPage'
import profile from '../images/profile.png'
import axios from 'axios'

const Review = ({item}) => {

    const deleteReview = () => {
        axios.delete("http://13.124.26.107:9095/api/comment", JSON.stringify({contents: item.contents, memberEmail: item.email}))
            .then(responese => alert("삭제되었습니다"))
            .catch(error => alert("실패"))
    }

    return(
        <>
        <S.ReviewLi>
            <div>
            <S.RProfile src={profile}></S.RProfile><span>{item.email}</span><S.Span>{item.contents}</S.Span>
            </div>
            <div><S.XButton onClick={()=>deleteReview()}><div><svg color="gray" fill="gray" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg></div></S.XButton></div>
        </S.ReviewLi>
        </>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <Review item={item}/>
        )
    ) 
    return itemList;
}

export default List