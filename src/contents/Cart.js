import React,{useState} from 'react'
import * as S from '../styled/App'

const Cart = ({item}) => {

    const [value, setValue] = useState(1);

    return(
        <S.CaLi>
            <S.Top>
            <S.CaDiv>
            <S.CaImg src={item.img}></S.CaImg>
            <S.CaSpan>{item.name}</S.CaSpan>
            <S.CaPrice>
            <i class="fas fa-plus-circle"></i>
            <S.CaInput value={value}></S.CaInput>
            <i class="fas fa-minus-circle"></i>
            </S.CaPrice>
            </S.CaDiv>
            </S.Top>
            <S.CaBottom></S.CaBottom>
        </S.CaLi>
    )
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <Cart item={item} img={item.img} id={item.id} name={item.name} key={item.id}/>
        )
    ) 
    return itemList;
}

export default List