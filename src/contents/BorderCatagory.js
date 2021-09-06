import React from 'react'
import * as S from '../styled/App'

const BorderCatagory = ({item}) => {

}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <BorderCatagory item={item} />
        )
    )

}

export default List