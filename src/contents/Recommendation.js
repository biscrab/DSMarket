import React from 'react'
import { Link , useHistory} from 'react-router-dom';
import * as S from '../styled/App'

const Recommendation = ({item}) => {

    let history = useHistory();

    return(
        <S.BDiv onClick={()=>history.push(`/item/${item.id}`)}>
        <S.BestImg src={item.img}></S.BestImg>
        <S.Bfont>{item.name}</S.Bfont>
        <S.Bprice>100원</S.Bprice>
    </S.BDiv>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <Recommendation item={item} id={item.id} img={item.img} />
        )
    ) 
    return itemList;
}

export default List