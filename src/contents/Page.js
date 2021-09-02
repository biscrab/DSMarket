import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { Item } from '../pages'
import * as S from '../styled/App'

const Page = ({item}) => {

    let location = useLocation();
    let history = useHistory();
    const query = queryString.parse(location.search);
    
    return(
        <S.Pbutton onClick={()=>history.push(`p=${item}`)} bkcolor={Number(query.p) === item ? "royalblue" : "white"} color={Number(query.p) === item ? "white" : "black"}>
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