import React,{useState} from 'react'
import { useHistory } from 'react-router';
import * as S from '../styled/App'
import Profile from '../images/profile.png'

const Select = ({item}) => {

    let history = useHistory();

    return(
        <S.RDiv>
            <S.RHead>
                <S.RHUser>
                    <S.RHImg src={Profile}></S.RHImg>
                    <span>1</span>
                </S.RHUser>
                <svg aria-label="옵션 더 보기" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6.5" cy="12" r="1.5"></circle><circle cx="17.5" cy="12" r="1.5"></circle></svg>
            </S.RHead>
            <S.RImg src={item.img} onClick={()=>history.push(`/item/${item.id}`)}/>
            <S.RBody>
            <S.Rp>{item.name}</S.Rp>
            <S.Rprice>{item.price}원</S.Rprice>
            </S.RBody>
        </S.RDiv>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => ( 
            <Select item={item} key={item.name} name={item.name} price={item.price} img={item.img} id={item.id}/>
        )
    )
    return itemList
}

export default List;