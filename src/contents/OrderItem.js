import React from "react";
import { useHistory } from "react-router";
import * as S from '../styled/App'

const OrderItem = ({item}) => {

    let history = useHistory();

    return(
    <S.OrderItemDiv onClick={()=>history.push(`/item/${item.id}`)}>
        <S.OrderItemImg src={item.img}></S.OrderItemImg><S.OrderItemSpan>{item.name}</S.OrderItemSpan>
    </S.OrderItemDiv>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <OrderItem item={item} name={item.name} img={item.img}/>
        )
    ) 
    return itemList;
}

export default List