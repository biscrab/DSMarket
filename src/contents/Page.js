import React from 'react'
import { Item } from '../pages'
import * as S from '../styled/App'

const Page = () => {
    return(
        <S.Pbutton>

        </S.Pbutton>
    )
}

const List = ({lists}) => {
    const itemlist = lists.map(
        item => (
            <Page />
        )
    )
    return itemlist
}

export default Page