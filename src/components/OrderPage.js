import React from 'react';
import * as S from '../styled/App'
import OrderItem from '../contents/OrderItem'
import A from '../images/a.jpg'
import B from '../images/b.jpg'
import { useHistory } from 'react-router';

const OrderPage = () => {

    let history = useHistory();

    const list = [{id: 1, name: 1, img: A},{id: 2, name: 2, img: B}];

    return(
        <S.O>
            <S.OBorder>
            <S.ODiv> 
                <S.Have color="royalblue" onClick={()=>history.push('/order/dilivery')}><S.HSpan>배송중</S.HSpan></S.Have>
                <S.Have onClick={()=>history.push('/order/dilivery')}><S.HSpan>주문내역</S.HSpan></S.Have>
                <S.Have onClick={()=>history.push('/order/dilivery')}><S.HSpan>나의 상품</S.HSpan></S.Have>        
            </S.ODiv>
            <OrderItem lists={list}/>
            </S.OBorder>
        </S.O>
    )
}

export default OrderPage