import React from 'react'
import { useHistory } from 'react-router-dom'
import { Item } from '../pages'
import * as S from '../styled/App'

const Admin = ({item}) => {

    let history = useHistory();

    return(
        <S.Ali>
            {item.name}
        </S.Ali>
    )
}

const List = ({lists}) => {
    const itemlist = lists.map(
        item => (
            <Admin item={item} key={item.name}/>
        )
    )
    return itemlist
}

export default List