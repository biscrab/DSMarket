import React,{useState} from 'react';
import * as S from '../styled/App'

const RegistOption = ({item}) => {

    const Option = ({lists}) => {
        const itemList = lists.map(
            item => (
            <option>
            {item.name}
            </option> 
            )
        )
        return itemList;
    }

    return(
            <S.RegistDetail>
            <S.DetailSpan>{item.name}</S.DetailSpan>
            <S.DetailSelect>
                <Option lists={item.option}/>
            </S.DetailSelect>  
            </S.RegistDetail>
    )

    //        <Option lists={item.option}/>
}

const List = ({lists, path}) => {
    const itemList = lists.map(
        item => (
            <RegistOption item={item} name={item.name} option={item.option}/>
        )
    )
    return itemList;  
}

export default List;