import React from 'react'
import * as S from '../styled/App'

const Cart = ({item}) => {
    return(
        <S.CaLi>
            <span>{item.id}</span>
            <S.CaImg src={item.img}></S.CaImg>
            <span>{item.name}</span>
        </S.CaLi>
    )
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <Cart item={item} img={item.img} id={item.id} name={item.name} key={item.id}/>
        )
    ) 
    return itemList;
}

export default List