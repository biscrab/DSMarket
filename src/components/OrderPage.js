import React from 'react';
import * as S from '../styled/App'

const OrderPage = () => {
    return(
        <S.O>
            <S.OBorder>
            <S.ODiv> 
                <S.Have color="royalblue"><S.HSpan>배송중</S.HSpan><S.HNumber>0</S.HNumber></S.Have>
                <S.Have><S.HSpan>할인쿠폰</S.HSpan><S.HNumber>0</S.HNumber></S.Have>
                <S.Have><S.HSpan>배송중</S.HSpan><S.HNumber>0</S.HNumber></S.Have>
                <S.Have><S.HSpan>장바구니</S.HSpan><S.HNumber>0</S.HNumber></S.Have>
                <S.Have><S.HSpan>나의 상품</S.HSpan><S.HNumber>0</S.HNumber></S.Have>
            </S.ODiv>
            </S.OBorder>
        </S.O>
    )
}

export default OrderPage