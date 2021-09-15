import React,{useState} from 'react'
import { useHistory } from 'react-router';
import * as S from '../styled/App'

const Select = ({item}) => {

    let history = useHistory();

    return(
        <S.RDiv>
            <S.RImg src={item.img} onClick={()=>history.push(`/item/${item.id}`)}/>
            <S.Rp>{item.name}</S.Rp>
            <S.Rprice>{item.price}원</S.Rprice>
        </S.RDiv>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => ( 
            <Select item={item} key={item.name} name={item.name} price={item.price} img={item.img} id={item.id}/>
        )
    )
    return itemList
}

export default List;