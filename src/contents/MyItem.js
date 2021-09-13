import React from "react";
import { useHistory } from "react-router";
import * as S from '../styled/MyPage'

const MyItem = ({item}) => {

    let history = useHistory();

    return(
    <S.Card onClick={()=>history.push(`/item/${item.id}`)}>
    <div class="card" style={{width: "18rem;"}}>
    <S.ItemImg src={item.img} class="card-img-top" alt="..." />
    <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <b class="card-text">{item.price}원</b>
    </div>
    </div>
    </S.Card>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <MyItem item={item} img={item.img} name={item.name} price={item.price} star={item.star} id={item.id} review={item.review}/>
        )
    )
    return itemList;
}

export default List