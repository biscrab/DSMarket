import React from 'react'
import * as S from '../styled/App'

const OtherList = ({item}) => {
    return(
        <S.OtherLi>
            <S.OtherImg src={item.img}></S.OtherImg>
            <S.OtherName>{item.name}</S.OtherName>
        </S.OtherLi>
    )
}

const List = ({lists}) => {
    const itemList = lists.map(
        item =>{
            return(
                <OtherList item={item} img={item.img} name={item.name}/>
            )
        }
    )
    return itemList
}

export default List;