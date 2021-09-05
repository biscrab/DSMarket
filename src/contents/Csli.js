import React from 'react'
import * as S from '../styled/App'

const Item = ({item}) => {

    return(
        <S.CSLi>{item.name}</S.CSLi>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <Item item={item} name={item.name}/>
        )
    )
    return itemList;
}

export default List