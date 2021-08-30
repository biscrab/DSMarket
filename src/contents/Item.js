import React from 'react'
import { useHistory } from 'react-router-dom'
import Star from '../contents/Star'
import * as S from '../styled/App'

const Item = ({item, lists}) => {

    let history = useHistory();

    return(
        <S.ItemBox onClick={()=> history.replace(`item/id?=${item.id}`)}>
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
            <Item item={item} key={item.id} id={item.id} img={item.img} name={item.name} price={item.price} star={item.star}/>
        )
    )
    return itemList;
}

export default List