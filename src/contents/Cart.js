import React,{useEffect, useState} from 'react'
import * as S from '../styled/App'

const Cart = ({item}) => {

    const [v, setV] = useState();

    useEffect(()=>{
        if(v < 1){
            setV(1);
        }
    })

    return(
        <S.CaLi>
            <S.Top>
            <S.CaSelect type="checkbox"></S.CaSelect>
            <S.CaImg src={item.img}></S.CaImg>

            <S.CaDiv>
            <S.CaSpan>{item.name}</S.CaSpan>
            <S.CaB>
            <span>{item.id}</span>
            {item.status === "판매중"? 
            <S.CaPrice>
            <S.CaInput type="number" value={v} onChange={(e)=>{setV(e.target.value)}}></S.CaInput>
            </S.CaPrice> : <></> }
            </S.CaB>
            </S.CaDiv>
            </S.Top>
            
            <S.CaBottom>
                <span>{item.status}</span>
            </S.CaBottom>
        </S.CaLi>
    )
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <Cart item={item} img={item.img} id={item.id} name={item.name} status={item.status}/>
        )
    ) 
    return itemList;
}

export default List