import React from 'react'
import Star from '../contents/Star'
import * as S from '../styled/App'

const Item = ({item, lists}) => {
    return(
        <S.ItemBox>
            <S.ItemImg src={item.img}/>
                <S.Ip>{item.name}</S.Ip>
                <S.PText>{item.price}원</S.PText>
                <Star star={item.star}/>
        </S.ItemBox>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <Item item={item} key={item.name} img={item.img} name={item.name} price={item.price} star={item.star}/>
        )
    )
    return itemList;
}

export default List