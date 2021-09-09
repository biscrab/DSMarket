import React from 'react'
import { useHistory } from 'react-router-dom'
import { Item } from '../pages'
import * as S from '../styled/App'

const Admin = ({item}) => {

    let history = useHistory();

    return(
        <S.ALi onClick={()=>history.push(`/admin/id?=${item.id}`)}>
            {item.name}
        </S.ALi>
    )
}

const List = ({lists}) => {
    const itemlist = lists.map(
        item => (
            <Admin item={item} id={item.id} name={item.name}/>
        )
    )
    return itemlist
}

export default List