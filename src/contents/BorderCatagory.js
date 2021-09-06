import React from 'react'
import { useHistory } from 'react-router'
import * as S from '../styled/App'

const BorderCatagory = ({item}) => {

    let history = useHistory();

    <S.CatagoryDivLi onClick={()=>history.push(`/catagory/${item.path}`)}>{item.name}</S.CatagoryDivLi>
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <BorderCatagory item={item} name={item.name} path={item.path}/>
        )
    )

}

export default List