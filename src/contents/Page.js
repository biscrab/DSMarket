import React from 'react'
import { Item } from '../pages'
import * as S from '../styled/App'

const Page = ({item}) => {
    return(
        <S.Pbutton>
            {item}
        </S.Pbutton>
    )
}

const List = ({lists}) => {
    const itemlist = lists.map(
        item => (
            <Page item={item} />
        )
    )
    return itemlist
}

export default List