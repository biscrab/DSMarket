import React from 'react'
import { Link , useHistory} from 'react-router-dom';
import * as S from '../styled/App'

const Recommendation = ({item}) => {

    let history = useHistory();

    return(
        <S.BDiv onClick={()=>history.push(`/item/${item.id}`)}>
        <S.BestImg src={item.img}></S.BestImg>
        <S.Bfont>{item.name}</S.Bfont>
        <S.PDiv>
            <S.Bprice>100</S.Bprice>
            <S.Won>원</S.Won>
        </S.PDiv>
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