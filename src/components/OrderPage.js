import React from 'react';
import * as S from '../styled/App'
import Cart from '../contents/Cart'
import A from '../images/a.jpg'
import B from '../images/b.jpg'
import { useHistory } from 'react-router';

const OrderPage = () => {

    let history = useHistory();

    const list = [{id: 1, name: 1, img: A, status: "대기중"},{id: 2, name: 2, img: B, status: "대기중"}];

    return(
        <S.O>
            <S.OBorder>
            <S.ODiv> 
                <S.Have color="royalblue" onClick={()=>history.push('/order/dilivery')}><S.HSpan>배송중</S.HSpan><S.HNumber>0</S.HNumber></S.Have>
                <S.Have onClick={()=>history.push('/order/dilivery')}><S.HSpan>주문내역</S.HSpan><S.HNumber>0</S.HNumber></S.Have>
                <S.Have onClick={()=>history.push('/order/dilivery')}><S.HSpan>나의 상품</S.HSpan><S.HNumber>0</S.HNumber></S.Have>        
            </S.ODiv>
            <Cart lists={list}/>
            </S.OBorder>
        </S.O>
    )
}

export default OrderPage