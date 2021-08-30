import React from 'react'
import * as S from '../styled/App'

const Cart = ({item}) => {
    return(
        <S.CaLi>
            <img src={item.img}></img>
        </S.CaLi>
    )
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <Cart item={item} img={item.img} key={item.name}/>
        )
    ) 
    return itemList;
}

export default List