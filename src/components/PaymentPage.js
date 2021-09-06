import React from 'react'
import * as S from '../styled/App'

const PaymentPage = () => {
    return(
        <>
        <S.CartHead>
        <S.CartTittle>장바구니</S.CartTittle>
        </S.CartHead>
        <S.P>

        <S.PADiv>
        <h3>주문자 정보</h3>
        <S.UserInfo>
            <li><S.UIspan>이름</S.UIspan></li>
            <li><S.UIspan>연락처</S.UIspan></li>
        </S.UserInfo>
        <h3>배송지</h3>
        <S.DiliveryDiv></S.DiliveryDiv>
        </S.PADiv>

        <S.PADiv>
        <h3>주문상품 정보</h3>
        <S.ItemInfo>
            <S.InfoNumber>1</S.InfoNumber>
        </S.ItemInfo>
        <S.PaymentDiv>
            <S.PaymentButton>구매하기</S.PaymentButton>
        </S.PaymentDiv>
        </S.PADiv>
        </S.P>
        </>
    )
}

export default PaymentPage;