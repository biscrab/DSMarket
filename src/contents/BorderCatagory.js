import React from 'react'
import { useHistory } from 'react-router-dom'
import * as S from '../styled/App'

const BorderCatagory = ({item}) => {

    let history = useHistory();

    return(
    <>
        <S.CatagoryDivLi onClick={()=>history.push(`/catagory/${item.path}`)}>{item.name}</S.CatagoryDivLi>
    </>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <BorderCatagory item={item} name={item.name} path={item.path}/>
        )
    )
    return itemList;
}

export default List