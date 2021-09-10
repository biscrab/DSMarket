import React from 'react'
import queryString from 'query-string'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import Star from '../contents/Star'
import * as S from '../styled/App'

const Item = ({item, lists}) => {

    let history = useHistory();

    //<S.DText>내일 9/1 도착예정</S.DText>

    return(
        <S.ItemBox onClick={()=>history.push(`/item/id?=${item.id}`)}>
            <S.ItemImg src={item.img}/>
                <S.Ip>{item.name}</S.Ip>
                <S.ItemPrice>{item.price}원</S.ItemPrice>
                <i class="far fa-heart" style={{color:"red"}}></i>
        </S.ItemBox>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <Item item={item} img={item.img} name={item.name} price={item.price} star={item.star} id={item.id} review={item.review}/>
        )
    )
    return itemList;
}

export default List