import React from 'react'
import * as S from '../styled/App'

const Item = ({item}) => {

    return(
        <S.CSLi>{item}</S.CSLi>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <Item item={item}/>
        )
    )
    return itemList;
}

export default List