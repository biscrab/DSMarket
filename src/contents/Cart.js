import React from 'react'
import * as S from '../styled/App'

const Cart = ({item}) => {
    return(
        <S.CaLi>
            <S.CaName>

            </S.CaName>
            <S.CaDiv>
            <S.CaImg src={item.img}></S.CaImg>
            <S.CaSpan>{item.name}</S.CaSpan>
            <i class="fas fa-plus-circle"></i>
            <S.CaInput></S.CaInput>
            <i class="fas fa-minus-circle"></i>
            </S.CaDiv>
            <S.CaBottom></S.CaBottom>
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