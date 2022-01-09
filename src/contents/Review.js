import React, { useState } from 'react'
import * as S from '../styled/MyPage'
import profile from '../images/profile.png'
import axios from 'axios'
import { useParams } from 'react-router'

const Review = ({item}) => {

    let params = useParams();

    function getCookie(cName) {
        cName = cName + '=';
        var cookieData = document.cookie;
        var start = cookieData.indexOf(cName);
        var cValue = '';
        if(start != -1){
        start += cName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cValue = cookieData.substring(start, end);
        }
        return unescape(cValue);
        }

    const config = {
        headers: {
          'Authorization': `Bearer ${getCookie("X-AUTH-TOKEN")}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        }
      }

    const deleteReview = () => {
        axios.delete("/api/comment", {
            headers: {
                'Authorization': `Bearer ${getCookie("X-AUTH-TOKEN")}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            },
            data: {name: item.name, info: params.id}
        }, config)
            .then(responese => alert("삭제되었습니다"))
            .catch(error => alert("실패"))
    }

    return(
        <>
        <S.ReviewLi>
            <div>
            <S.RProfile src={profile}></S.RProfile><span>{item.id}</span><S.Span>{item.contents}</S.Span>
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