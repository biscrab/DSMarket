import React from 'react';
import * as S from '../styled/App'

const AdminPage = () => {

    return(
        <>
        <S.A>
            <S.AdminDiv>
                <S.ASDiv>
                    <S.AS><S.CSpan>등록 대기중인 상품</S.CSpan></S.AS>
                    <S.AS><S.CSpan>신고 접수</S.CSpan></S.AS>
                    <S.AS><S.CSpan>공지사항</S.CSpan></S.AS>
                    <S.AS><S.CSpan>문의 접수</S.CSpan></S.AS>
                </S.ASDiv>
                <S.AUl>
                    <S.ALi></S.ALi>
                </S.AUl>
            </S.AdminDiv>
        </S.A>
        </>
    )
}

export default AdminPage