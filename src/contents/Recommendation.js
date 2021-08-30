import React from 'react'
import * as S from '../styled/App'

const Recommendation = ({item}) => {
    return(
        <S.BDiv>
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
            <Recommendation item={item} key={item.name} img={item.img} />
        )
    ) 
    return itemList;
}

export default List