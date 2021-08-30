import React,{useState} from 'react'
import * as S from '../styled/App'

const Select = ({item}) => {
    return(
        <S.RDiv>
            <S.RImg src={item.img}/>
            <p>{item.name}</p>
            <p>{item.price}</p>
        </S.RDiv>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => ( 
            <Select item={item} key={item.name} name={item.name} price={item.price} img={item.img}/>
        )
    )
    return itemList
}

export default List;