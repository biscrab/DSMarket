import React,{useState} from 'react';
import * as S from '../styled/App'

const RegistOption = ({item}) => {

    const Option = ({lists}) => {
        const itemList = lists.map(
            item => {
            <S.DetailSDiv>
            <input type="radio"></input>
            <span>{item}</span>
            </S.DetailSDiv> 
            }
        )
        return itemList;
    }

    return(
        <S.RegistDetail>
        <S.DetailSpan>{item.name}</S.DetailSpan>
        <S.DetailDiv>
        <S.DetailSDiv>
        <input type="radio"></input>
        <span>설정함</span>
        </S.DetailSDiv> 
        <Option lists={item.option}/>
        </S.DetailDiv>  
        </S.RegistDetail>
    )
}

const List = ({lists, path}) => {
    const itemList = lists.map(
        item => {
            <RegistOption item={item} name={item.name} path={path} option={item.option}/>
        }
    )
    return itemList;  
}

export default List;